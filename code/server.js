const express = require("express");
const path = require("path");
require("dotenv").config();
const router = express.Router();
const https = require("https");
const crypto = require("crypto");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const cors = require("cors");
const { z } = require("zod");
const compression = require("compression");

// ================= SECURITY =================
router.use(
  compression({
    threshold: 1024,
  }),
);

router.use(express.json({ limit: "50kb" }));

router.use(
  helmet({
    crossOriginEmbedderPolicy: false,

    contentSecurityPolicy: false,
  }),
);

router.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  }),
);

// ================= RATE LIMIT =================
const activeRequests = new Set();
const MAX_ACTIVE_REQUESTS = 25;

const executeLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 8,

  standardHeaders: true,
  legacyHeaders: false,

  handler: (req, res) => {

    res.status(429).json({
      run: {
        stdout: "",
        stderr: "🚫 Too many code executions",
        executionTime: "0 ms",
      },
    });

  },

});

router.use("/execute", executeLimiter);

// ================= CLEAN OUTPUT =================
function cleanOutput(output) {

  if (!output) return "";

  return output
    .replace(/enter.*?:/gi, "")
    .replace(/input.*?:/gi, "")
    .replace(/please enter.*?:/gi, "")
    .replace(/\n\s*\n/g, "\n")
    .trim();

}

// ================= CLEAN ERROR =================
function cleanError(stderr) {

  if (!stderr) return "";

  return (
    stderr
      .replace(/Traceback\s*\(most recent call last\):\s*/gi, "")
      .replace(/,\s*in\s+<\w+>\s*/g, "\n")
      .replace(/\s*in\s+\w+\s*\n/g, "\n")
      .replace(/File\s+"[^"]*",\s*line\s+\d+[^\n]*/g, "")
      .replace(/\s*at\s+[\w$.]+\([\w$.]+\.java:\d+\)/g, "")
      .replace(/\/tmp\/[^\s:]*/g, "")
      .replace(/jdoodle\.[a-z]+:\d+/gi, "")
      .replace(/solution\.[a-z]+:\d+/gi, "")
      .replace(/^\s{4,}.+$/gm, "")
      .replace(/\n\s*\n/g, "\n")
      .trim()
  );

}

// ================= WRAPPERS =================
function wrapCCode(code) {

  if (/main\s*\(/.test(code)) return code;

  return `
#include <stdio.h>

int main()
{
${code}

return 0;
}
`;

}

function wrapCppCode(code) {

  if (/main\s*\(/.test(code)) return code;

  return `
#include <iostream>

using namespace std;

int main()
{
${code}

return 0;
}
`;

}

function wrapGoCode(code) {

  if (/package\s+main/.test(code)) return code;

  return `
package main

import "fmt"

func main()
{
${code}
}
`;

}

function wrapCSharp(code) {

  if (/class\s+Program/.test(code)) return code;

  return `
using System;

class Program
{
    static void Main(string[] args)
    {
        ${code}
    }
}
`;

}

// ================= LANGUAGE MAP =================
const JUDGE0_LANG_MAP = {

  python: 100,
  java: 91,
  cpp: 105,
  c: 103,
  javascript: 102,
  csharp: 51,
  go: 95,

};

// ================= JDOODLE MAP =================
const JDOODLE_LANG_MAP = {

  python: "python3",
  java: "java",
  cpp: "cpp17",
  c: "c",
  javascript: "nodejs",
  csharp: "csharp",

};

// ================= ENV =================
const JUDGE0_URL =
  process.env.JUDGE0_URL;

const JDOODLE_CLIENT_ID =
  process.env.JDOODLE_CLIENT_ID;

const JDOODLE_CLIENT_SECRET =
  process.env.JDOODLE_CLIENT_SECRET;

// ================= VALIDATION =================
const executeSchema = z.object({

  language: z.enum([
    "python",
    "java",
    "cpp",
    "c",
    "javascript",
    "go",
    "csharp",
  ]),

  stdin: z.string().max(10000).optional(),

  files: z
    .array(
      z.object({
        content: z.string().max(30000),
      }),
    )
    .min(1),

});

// ================= EXECUTE =================
router.post("/execute", async (req, res) => {

  const validation =
    executeSchema.safeParse(req.body);

  if (!validation.success) {

    return res.status(400).json({
      error: "Invalid payload",
    });

  }

  if (activeRequests.size >= MAX_ACTIVE_REQUESTS) {

    return res.status(503).json({
      run: {
        stdout: "",
        stderr: "🚫 Server busy. Try again.",
        executionTime: "0 ms",
      },
    });

  }

  const reqId =
    crypto.randomUUID();

  activeRequests.add(reqId);

  const {
    language,
    files,
    stdin = "",
  } = req.body;

  if (
    !language ||
    !files?.[0]?.content
  ) {

    return res.status(400).json({
      error: "Invalid request",
    });

  }

  let code =
    files[0].content;

  // ================= SECURITY =================
  const blockedKeywords = [

    "system(",
    "exec(",
    "popen(",
    "Runtime.getRuntime",
    "ProcessBuilder",
    "os.system",
    "subprocess",
    "child_process",
    "require('fs')",
    'require("fs")',
    "fs.unlink",
    "fs.writeFile",
    "fs.rm",
    "eval(",
    "Function(",
    "__import__",

  ];

  const normalizedCode =
    code.replace(/\s+/g, "")
        .toLowerCase();

  if (
    blockedKeywords.some((k) =>
      normalizedCode.includes(
        k.replace(/\s+/g, "")
         .toLowerCase()
      ),
    )
  ) {

    return res.json({
      run: {
        stdout: "",
        stderr:
          "❌ Restricted system call detected",
        executionTime: "0 ms",
      },
    });

  }

  // ================= WRAPPERS =================
  if (language === "c")
    code = wrapCCode(code);

  if (language === "cpp")
    code = wrapCppCode(code);

  if (language === "go")
    code = wrapGoCode(code);

  if (language === "csharp")
    code = wrapCSharp(code);

  if (language === "java") {

    if (
      /public\s+class\s+\w+/.test(code) &&
      !/public\s+class\s+Main/.test(code)
    ) {

      code =
        code.replace(
          /public\s+class\s+\w+/,
          "public class Main"
        );

    }

  }

  // ================= LANG ID =================
  const langId =
    JUDGE0_LANG_MAP[language];

  if (!langId) {

    return res.json({
      run: {
        stdout: "",
        stderr:
          "❌ Language not supported",
        executionTime: "0 ms",
      },
    });

  }

  const controller =
    new AbortController();

  const timeout =
    setTimeout(() => {

      controller.abort();

    }, 20000);

  let jdoodleTimeout;

  try {

    // ================= JUDGE0 =================
    const submitRes =
      await fetch(
        `${JUDGE0_URL}/submissions?base64_encoded=false&wait=true`,
        {

          method: "POST",

          signal: controller.signal,

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({

            language_id: langId,

            source_code: code,

            stdin: stdin,

            cpu_time_limit: 3,
            wall_time_limit: 5,
            memory_limit: 128000,

            redirect_stderr_to_stdout: false,
            enable_network: false,

          }),

        },
      );

    const result =
      await submitRes.json();

    const MAX_OUTPUT = 5000;

    const stdout =
      (result?.stdout || "")
        .slice(0, MAX_OUTPUT);

    const stderr =
      cleanError(
        (
          result?.stderr ||
          result?.compile_output ||
          ""
        ).slice(0, MAX_OUTPUT),
      );

    const status =
      result?.status?.description || "";

    if (
      status ===
      "Time Limit Exceeded"
    ) {

      return res.json({
        run: {
          stdout: "",
          stderr:
            "⏱ Time Limit Exceeded",
          executionTime: "0 ms",
        },
      });

    }

    return res.json({

      run: {

        stdout:
          stdout.trim(),

        stderr:
          stderr.trim(),

        executionTime: null,

      },

    });

  }

  // ================= FALLBACK =================
  catch (err) {

    try {

      const jdoodleLang =
        JDOODLE_LANG_MAP[language];

      const jdoodleController =
        new AbortController();

      jdoodleTimeout =
        setTimeout(() => {

          jdoodleController.abort();

        }, 20000);

      const jdoodleRes =
        await fetch(
          "https://api.jdoodle.com/v1/execute",
          {

            method: "POST",

            signal:
              jdoodleController.signal,

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({

              clientId:
                JDOODLE_CLIENT_ID,

              clientSecret:
                JDOODLE_CLIENT_SECRET,

              script: code,

              language:
                jdoodleLang,

              versionIndex: "0",

              stdin: stdin,

            }),

          },
        );

      const data =
        await jdoodleRes.json();

      const jdOutput =
        data.output || "";

      const hasError =
        /error|exception|syntaxerror|traceback/i
          .test(jdOutput);

      return res.json({

        run: {

          stdout:
            hasError
              ? ""
              : cleanOutput(jdOutput),

          stderr:
            hasError
              ? cleanError(jdOutput)
              : "",

          executionTime: null,

        },

      });

    }

    catch {

      return res.json({

        run: {

          stdout: "",

          stderr:
            "❌ Judge0 + JDoodle both failed",

          executionTime: "0 ms",

        },

      });

    }

  }

  finally {

    clearTimeout(timeout);

    if (jdoodleTimeout) {

      clearTimeout(jdoodleTimeout);

    }

    activeRequests.delete(reqId);

  }

});

// ================= AI HINT =================
router.post("/ai-hint", async (req, res) => {

  try {

    const {
      question,
      hint1,
      level,
    } = req.body;

    const systemPrompt =
      `You are a coding tutor like LeetCode.`;

    const userPrompt =
      `Question: ${question}`;

    const body =
      JSON.stringify({

        model:
          "llama-3.3-70b-versatile",

        max_tokens: 120,

        temperature: 0.5,

        messages: [

          {
            role: "system",
            content: systemPrompt,
          },

          {
            role: "user",
            content: userPrompt,
          },

        ],

      });

    const options = {

      hostname: "api.groq.com",

      path:
        "/openai/v1/chat/completions",

      method: "POST",

      headers: {

        "Content-Type":
          "application/json",

        Authorization:
          `Bearer ${process.env.GROQ_API_KEY}`,

      },

    };

    const apiReq =
      https.request(
        options,
        (apiRes) => {

          let data = "";

          apiRes.on(
            "data",
            (chunk) =>
              data += chunk
          );

          apiRes.on(
            "end",
            () => {

              try {

                const parsed =
                  JSON.parse(data);

                const hint =
                  parsed
                    .choices?.[0]
                    ?.message
                    ?.content
                    ?.trim()
                  ||
                  "Try smaller steps.";

                res.json({ hint });

              }

              catch {

                res.status(500).json({
                  error:
                    "Parse error",
                });

              }

            }
          );

        }
      );

    apiReq.on(
      "error",
      () => {

        res.status(500).json({
          error: "API error",
        });

      }
    );

    apiReq.write(body);

    apiReq.end();

  }

  catch {

    res.status(500).json({
      error: "Server error",
    });

  }

});

// ================= HOME =================
router.get("/", (req, res) => {

  res.render("tech.ejs");

});

// ================= EXPORT =================
module.exports = router;