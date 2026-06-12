 (function () {
        const appData = window.QuizData;

        const STORAGE_LANG = "codeques_lang";
        const STORAGE_TOPIC = "codeques_topic";
        const STORAGE_DARK = "codeques_dark";
        const RATINGS_KEY = "codeques_ratings";
        const USER_VOTES_KEY = "codeques_user_votes";

        // Supported languages (only these are active)
        const supportedLanguages = ["py", "java", "cpp", "c", "js", "cs"];

        let currentLanguage = localStorage.getItem(STORAGE_LANG) || "py";
        if (!supportedLanguages.includes(currentLanguage)) {
          currentLanguage = "py";
        }
        let currentTopic = null;
        let searchTerm = "";
        let showAllMode = false;
        let ratings = JSON.parse(localStorage.getItem(RATINGS_KEY)) || {};
        let userVotes = JSON.parse(localStorage.getItem(USER_VOTES_KEY)) || {};

        // CodeMirror instances map: qid → editor
        const codeMirrorEditors = {};

        // Navigation state
        let questionsList = [];
        let currentQuestionIdx = 0;

        // Pagination state
        let currentPage = 1;
        const ITEMS_PER_PAGE = 20;
        let totalPagesCount = 1; 

        // ── Dark mode ────────────────────────────────────────────────
        const body = document.body;
        if (localStorage.getItem(STORAGE_DARK) === "true") {
          body.classList.add("dark");
        }

        const langHeader = document.getElementById("langHeader");
        const topicsContainer = document.getElementById("topicsContainer");
        const questionsArea = document.getElementById("questionsArea");
        const searchInput = document.getElementById("searchInput");
        const searchBtn = document.getElementById("searchBtn");
        const darkToggle = document.getElementById("darkToggle");
        const showAllBtn = document.getElementById("showAllBtn");
        const sidebarHeading = document.getElementById("sidebarHeading");
        const menuToggle = document.getElementById("menuToggle");
        const sidebar = document.getElementById("sidebar");

        // Mobile sidebar toggle
        if (menuToggle) {
          menuToggle.addEventListener("click", () => {
            sidebar.classList.toggle("show");
          });
        }

        // Close sidebar when clicking outside
        document.addEventListener("click", (e) => {
          if (
            window.innerWidth <= 900 &&
            sidebar.classList.contains("show") &&
            !sidebar.contains(e.target) &&
            !menuToggle.contains(e.target)
          ) {
            sidebar.classList.remove("show");
          }
        });

        function updateDarkToggle() {
          darkToggle.textContent = body.classList.contains("dark")
            ? "☀️ Light"
            : "🌙 Dark";
        }
        updateDarkToggle();
        // ── Toast notification ──────────────────────────
function showToast(msg) {
  const toast = document.getElementById("nav-toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.style.opacity = "1";
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { 
    toast.style.opacity = "0"; 
  }, 2000);
}

        darkToggle.addEventListener("click", () => {
          body.classList.toggle("dark");
          localStorage.setItem(STORAGE_DARK, body.classList.contains("dark"));
          updateDarkToggle();
        });

        // ── Language bar ─────────────────────────────────────────────
        function renderLanguages() {
          langHeader.innerHTML = "";
          appData.languages.forEach((lang) => {
            const isSupported = supportedLanguages.includes(lang.id);
            const btn = document.createElement("button");
            btn.className = `lang-btn ${currentLanguage === lang.id ? "active" : ""} ${!isSupported ? "disabled" : ""}`;
            btn.textContent = lang.name + (isSupported ? "" : " (Coming Soon)");
            btn.dataset.lang = lang.id;

            if (isSupported) {
              btn.addEventListener("click", () => {
                currentLanguage = lang.id;
                currentTopic = null;
                showAllMode = false;
                searchTerm = "";
                searchInput.value = "";
                currentPage = 1;
                localStorage.setItem(STORAGE_LANG, currentLanguage);
                localStorage.removeItem(STORAGE_TOPIC);
                renderLanguages();
                renderTopics();
                renderQuestions();
              });
            } else {
              btn.addEventListener("click", () => {
                alert("🚧 This language is coming soon!");
              });
            }

            langHeader.appendChild(btn);
          });

          const activeBtn = langHeader.querySelector(".lang-btn.active");
          if (activeBtn) {
            activeBtn.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center",
            });
          }
        }

        // ── Topics sidebar ───────────────────────────────────────────
        function renderTopics() {
          const langName =
            appData.languages.find((l) => l.id === currentLanguage)?.name ||
            "Unknown";
          sidebarHeading.textContent = `${langName} Topic`;

          const filteredTopics = appData.topics.filter(
            (t) =>
              t.langId === currentLanguage &&
              t.name.toLowerCase().includes(searchTerm.toLowerCase()),
          );

          if (
            !currentTopic &&
            filteredTopics.length > 0 &&
            !searchTerm &&
            !showAllMode
          ) {
            currentTopic = filteredTopics[0].id;
          }

          topicsContainer.innerHTML = "";
          if (filteredTopics.length === 0) {
            topicsContainer.innerHTML =
              '<div class="empty-message">✨ No matching topics</div>';
            showAllBtn.style.display = "none";
            return;
          }

          filteredTopics.forEach((topic) => {
            const chip = document.createElement("span");
            chip.className = `topic-chip ${currentTopic === topic.id && !showAllMode ? "active" : ""}`;
            chip.textContent = topic.name;
            chip.dataset.topicId = topic.id;
            chip.addEventListener("click", () => {
              currentTopic = topic.id;
              showAllMode = false;
              currentPage = 1;
              searchTerm = "";
              searchInput.value = "";
              localStorage.setItem(STORAGE_TOPIC, currentTopic);
              renderTopics();
              renderQuestions();
              if (window.innerWidth <= 900) sidebar.classList.remove("show");
            });
            topicsContainer.appendChild(chip);
          });

          showAllBtn.style.display = showAllMode ? "none" : "inline-block";
        }

        // ── Close all panels ─────────────────────────────────────────
        function closeAllPanels() {
          document
            .querySelectorAll(
              ".solution-panel, .hint-panel, .code-runner-panel",
            )
            .forEach((p) => p.classList.remove("show"));
          document
            .querySelectorAll(".toggle-solution")
            .forEach((b) => (b.textContent = "🔍 Solution"));
          document
            .querySelectorAll(".hint-btn")
            .forEach((b) => (b.textContent = "💡 Hint"));
          document
            .querySelectorAll(".run-code-btn")
            .forEach((b) => (b.textContent = "▶ Run Code"));
        }

      function scrollToCurrentQuestion() {
  if (questionsList.length === 0) return;

  const panels = document.querySelectorAll(
    ".solution-panel, .code-runner-panel, .hint-panel"
  );
  panels.forEach(p => p.style.transition = "none");

  closeAllPanels();

  void document.body.offsetHeight;

  const card = questionsList[currentQuestionIdx];
  if (card) {
    const y = card.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  setTimeout(() => {
    panels.forEach(p => p.style.transition = "");
  }, 50);
}

        // ✅ NEW: Ctrl+A to select only solution code (not entire page)
        function attachSelectiveCtrlA() {
          document.removeEventListener("keydown", globalCtrlAHandler);
          document.addEventListener("keydown", globalCtrlAHandler);
        }

        function globalCtrlAHandler(e) {
          if ((e.ctrlKey || e.metaKey) && e.key === "a") {
            const openSolutionPanel = document.querySelector(
              ".solution-panel.show",
            );
            if (openSolutionPanel) {
              const codeBlock = openSolutionPanel.querySelector("code");
              if (codeBlock) {
                e.preventDefault();
                const range = document.createRange();
                range.selectNodeContents(codeBlock);
                const selection = window.getSelection();
                selection?.removeAllRanges();
                selection?.addRange(range);
              }
            }
          }
        }

        // ── Main render with pagination ───────────────────────────────
        function renderQuestions() {
          for (let id in codeMirrorEditors) delete codeMirrorEditors[id];

          let allQuestions = [];
          if (showAllMode) {
            const topicIdsForLang = appData.topics
              .filter((t) => t.langId === currentLanguage)
              .map((t) => t.id);
            allQuestions = appData.questions
              .filter((q) => topicIdsForLang.includes(q.topicId))
              .sort((a, b) => a.topicId.localeCompare(b.topicId));
          } else if (currentTopic) {
            allQuestions = appData.questions.filter(
              (q) => q.topicId === currentTopic,
            );
          } else {
            allQuestions = [];
          }

          const totalPages =
            Math.ceil(allQuestions.length / ITEMS_PER_PAGE) || 1;
            totalPagesCount = totalPages;   // ← YEH ADD KARO
          if (currentPage < 1) currentPage = 1;
          if (currentPage > totalPages) currentPage = totalPages;

          const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
          const endIndex = Math.min(
            startIndex + ITEMS_PER_PAGE,
            allQuestions.length,
          );
          const pageQuestions = allQuestions.slice(startIndex, endIndex);

          // Build HTML
          let questionsHTML = "";
          if (allQuestions.length === 0) {
            questionsHTML =
              '<div class="empty-message">📭 No questions for this topic/language</div>';
          } else if (showAllMode) {
            let prevTopicId = null;
            let tempHTML = "";
            pageQuestions.forEach((q, idx) => {
              if (q.topicId !== prevTopicId) {
                if (prevTopicId !== null) tempHTML += "</div>";
                const topic = appData.topics.find((t) => t.id === q.topicId);
                tempHTML += `<div class="topic-group"><h3>📘 ${topic ? topic.name : "Unknown"}</h3>`;
                prevTopicId = q.topicId;
              }
              tempHTML += renderQuestionCard(q, startIndex + idx + 1);
            });
            if (prevTopicId !== null) tempHTML += "</div>";
            questionsHTML = tempHTML;
          } else {
            pageQuestions.forEach((q, idx) => {
              questionsHTML += renderQuestionCard(q, startIndex + idx + 1);
            });
          }

          // Pagination controls
          const rangeText =
            allQuestions.length > 0
              ? `Questions ${startIndex + 1}–${endIndex}`
              : "";
          const paginationHTML = `
            <div class="pagination-controls">
              <button class="pagination-btn" id="prevPageBtn" ${currentPage === 1 ? "disabled" : ""}>← Previous</button>
              <span>Page ${currentPage} of ${totalPages} ${rangeText}</span>
              <button class="pagination-btn" id="nextPageBtn" ${currentPage === totalPages ? "disabled" : ""}>Next →</button>
            </div>`;

          const langName =
            appData.languages.find((l) => l.id === currentLanguage)?.name ||
            "Programming";
          const booksButtonHTML = `<div style="margin-bottom:1rem;">
            <button id="booksButton" class="books-btn">📚 ${langName} Books</button>
              <button id="codeArenaButton" class="books-btn" style="background:linear-gradient(135deg,#7c3aed,#2563eb);">🚀 Code Arena</button></div>`;

          questionsArea.innerHTML =
            booksButtonHTML +
            questionsHTML +
            (allQuestions.length > 0 ? paginationHTML : "");
            // Code Arena button
          document.getElementById("codeArenaButton") ?.addEventListener("click", () => {
           window.location.href = "/tech-interview/code-arena";
  });

          // Pagination events
          document
            .getElementById("prevPageBtn")
            ?.addEventListener("click", () => {
              if (currentPage > 1) {
                currentPage--;
                renderQuestions();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            });
          document
            .getElementById("nextPageBtn")
            ?.addEventListener("click", () => {
              if (currentPage < totalPages) {
                currentPage++;
                renderQuestions();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            });

          // Books button
          document
            .getElementById("booksButton")
            ?.addEventListener("click", () => {
              alert(`${langName} books coming soon!`);
            });

          // Update questionsList
          questionsList = Array.from(
            document.querySelectorAll(".question-card"),
          );
          currentQuestionIdx = 0;
          window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ ADD THIS

          // Attach all event handlers
          attachSolutionEvents();
          attachRatingEvents();
          attachCodeRunnerEvents();
          attachHintEvents();
          attachNavigationEvents();
          Prism.highlightAll();
          attachSelectiveCtrlA(); // ✅ attach Ctrl+A handler
        }

        // ── Question card HTML ────────────────────────────────────────
        function renderQuestionCard(q, number) {
          const rating = ratings[q.id] || { up: 0, down: 0 };
          const language = getLanguageFromTopic(q.topicId);
          const upVoted = userVotes[q.id] === "up" ? "voted" : "";
          const downVoted = userVotes[q.id] === "down" ? "voted" : "";
          const hintText = q.hint || "No hint available yet.";

          return `
            <div class="question-card" data-qid="${q.id}" data-lang="en">
              <div class="question-text" id="question-text-${q.id}">${number}. ${q.question}</div>
              <div class="button-group">
                <button class="nav-btn back-btn"      data-qid="${q.id}" aria-label="Previous question">←</button>
                <button class="toggle-solution"       data-target="sol-${q.id}">🔍 Solution</button>
                <button class="hint-btn"              data-target="hint-${q.id}">💡 Hint</button>
                <button class="run-code-btn"          data-target="run-${q.id}">▶ Run Code</button>
                <button class="nav-btn next-btn"      data-qid="${q.id}" aria-label="Next question">→</button>
              </div>

                    <!-- Solution panel -->
              <div id="sol-${q.id}" class="solution-panel">
                <div class="solution-content">
                  <div class="math-solution" id="math-${q.id}">📐 ${q.mathSolution}</div>
                  <div style="position: relative;">
    <button class="copy-code-btn" data-codeid="code-${q.id}" style="position: absolute; top: 8px; right: 8px; background: #26354f; border: none; color: white; padding: 4px 10px; border-radius: 8px; cursor: pointer; font-size: 12px; z-index: 10;">📋 Copy</button>
    <pre class="code-solution" id="code-pre-${q.id}" style="position: relative;">
        <code class="language-${getLanguageClass(q)}" id="code-${q.id}">${escapeHtml(q.codeSolution)}</code>
    </pre>
    </div>
                  <div class="rating">
                    <button class="rating-btn up ${upVoted}"   data-qid="${q.id}">👍 <span class="rating-count">${rating.up}</span></button>
                    <button class="rating-btn down ${downVoted}" data-qid="${q.id}">👎 <span class="rating-count">${rating.down}</span></button>
                  </div>
                </div>
              </div>

              <!-- Hint panel -->
              <div id="hint-${q.id}" class="hint-panel">
                <div class="hint-content"></div>
              </div>

              <!-- Code runner panel -->
              <div id="run-${q.id}" class="code-runner-panel">
                <div class="code-runner-content">
                  <textarea id="editor-${q.id}" class="code-editor" placeholder="Write your code here..."></textarea>
                  <div id="input-container-${q.id}"></div>
                  <button type="button" class="execute-btn" data-qid="${q.id}" data-lang="${language}">
                    ⚡ Submit
                  </button>
                  <div id="output-${q.id}" class="output-area">Output will appear here...</div>
                </div>
              </div>
            </div>`;
        }

        // ── Helpers ──────────────────────────────────────────────────
        function getLanguageFromTopic(topicId) {
          const topic = appData.topics.find((t) => t.id === topicId);
          return topic ? topic.langId : "py";
        }

        function escapeHtml(unsafe) {
            if (!unsafe) return "";  
          return unsafe.replace(/[&<>"]/g, (m) => {
            if (m === "&") return "&amp;";
            if (m === "<") return "&lt;";
            if (m === ">") return "&gt;";
            if (m === '"') return "&quot;";
            return m;
          });
        }

        function getCodeMirrorMode(langId) {
          const map = {
            py: "python",
            js: "javascript",
            cpp: "text/x-c++src",
            java: "text/x-java",
            c: "text/x-csrc",
            cs: "text/x-csharp",
          };
          return map[langId] || "python";
        }

        function getLanguageClass(q) {
          const topic = appData.topics.find((t) => t.id === q.topicId);
          if (!topic) return "plaintext";
          const lang = topic.langId;
          if (lang === "py") return "python";
          if (lang === "js") return "javascript";
          if (lang === "java") return "java";
          if (lang === "c") return "c";
          if (lang === "cs") return "csharp";
          return "plaintext";
        }

        // ── Comment style per language (for Ctrl+/)
        // CodeMirror comment addon uses these internally;
        // we configure lineComment in the mode options.
        function getCommentStyle(langId) {
          // Returns the lineComment token used by CodeMirror comment addon
          const map = {
            py: "#", // Python  → # comment
            js: "//", // JS      → // comment
            cpp: "//", // C++     → // comment
            c: "//", // C       → // comment
            java: "//", // Java    → // comment
            cs: "//", // C#      → // comment
          };
          return map[langId] || "//";
        }

        // ── Navigation events ─────────────────────────────────────────
        function attachNavigationEvents() {
          document.querySelectorAll(".back-btn").forEach((btn) => {
            btn.removeEventListener("click", backHandler);
            btn.addEventListener("click", backHandler);
          });
          document.querySelectorAll(".next-btn").forEach((btn) => {
            btn.removeEventListener("click", nextHandler);
            btn.addEventListener("click", nextHandler);
          });
        }

     function backHandler(e) {
  e.preventDefault();
  const card = e.currentTarget.closest(".question-card");
  const index = questionsList.indexOf(card);
  
  if (index > 0) { 
    currentQuestionIdx = index - 1; 
    scrollToCurrentQuestion(); 
  } else if (currentPage > 1) {
    currentPage--;
    renderQuestions();
    setTimeout(() => {
      currentQuestionIdx = questionsList.length - 1;
      scrollToCurrentQuestion();
    }, 100);
  } else {
    showToast("⬅ You are on the very first question!");
  }
}

     function nextHandler(e) {
  e.preventDefault();
  const card = e.currentTarget.closest(".question-card");
  const index = questionsList.indexOf(card);
  
  if (index < questionsList.length - 1) { 
    currentQuestionIdx = index + 1; 
    scrollToCurrentQuestion(); 
  } else if (currentPage < totalPagesCount) {
    currentPage++;
    renderQuestions();
    setTimeout(() => {
      currentQuestionIdx = 0;
      scrollToCurrentQuestion();
    }, 100);
  } else {
    showToast("➡ You have reached the end!");
  }
}

        // ── Code runner events ────────────────────────────────────────
        function attachCodeRunnerEvents() {
          document.querySelectorAll(".run-code-btn").forEach((btn) => {
            btn.removeEventListener("click", toggleCodeRunner);
            btn.addEventListener("click", toggleCodeRunner);
          });
          document.querySelectorAll(".execute-btn").forEach((btn) => {
            btn.removeEventListener("click", executeCode);
            btn.addEventListener("click", executeCode);
          });
        }

        function toggleCodeRunner(e) {
          const btn = e.currentTarget;
          const panel = document.getElementById(btn.dataset.target);

          if (panel.classList.contains("show")) {
            closeAllPanels();
            return;
          }
          closeAllPanels();
          panel.classList.add("show");
          btn.textContent = "▲ Hide Code Runner";

          const qid = btn.dataset.target.replace("run-", "");
          const textarea = document.getElementById(`editor-${qid}`);

          if (textarea && !codeMirrorEditors[qid]) {
            const langId = document.querySelector(
              `.execute-btn[data-qid="${qid}"]`,
            ).dataset.lang;
            const mode = getCodeMirrorMode(langId);

            // ✅ CHANGE 1: autoCloseBrackets with full pairs including quotes and backticks
            // The closebrackets addon supports: () {} [] "" '' ``
            const editor = CodeMirror.fromTextArea(textarea, {
              lineNumbers: true,
              mode: mode,
              theme: "dracula",
              indentUnit: 4,
              tabSize: 4,
              indentWithTabs: false,
              lineWrapping: false,
              // ✅ Auto close brackets, braces, parens, quotes, backticks
              autoCloseBrackets: {
                pairs: "()[]{}''\"\"``", // all pairs to auto-close
                closeBefore: ")]}'\"`:", // only close before these chars
                triples: "", // no triple-quote auto-close
                explode: "[]{}()", // press Enter inside these to expand
              },
              extraKeys: {
                // ✅ CHANGE 2: Ctrl+/ toggles line comment for every language
                "Ctrl-/": function (cm) {
                  cm.execCommand("toggleComment");
                },
                // Also support Cmd+/ for Mac users
                "Cmd-/": function (cm) {
                  cm.execCommand("toggleComment");
                },
                // Tab key → insert spaces (not literal tab)
                Tab: function (cm) {
                  if (cm.somethingSelected()) {
                    cm.indentSelection("add");
                  } else {
                    cm.replaceSelection("    ", "end");
                  }
                },
              },
              placeholder: "Write your code here...",
            });

            // ✅ Set lineComment token so the comment addon knows what to insert
            // We patch the mode's config after creation
            const lineCommentToken = getCommentStyle(langId);
            // CodeMirror comment addon reads from mode, but we can also override:
            editor.setOption("lineComment", lineCommentToken);

            // ── Dynamic stdin box on code change ──────────────────────
            const inputContainer = document.getElementById(
              `input-container-${qid}`,
            );
            editor.on("change", () => {
              const rawCode = editor.getValue();

              // 🔥 remove comments + strings
              const code = sanitizeCode(rawCode).toLowerCase();

              let count = 0;

              // Python
              if (langId === "py") {
                count = (code.match(/input\s*\(/g) || []).length;
              }

              // Java
              else if (langId === "java") {
                count = (
                  code.match(/next(int|line|double|float|long|short)\s*\(/g) ||
                  []
                ).length;
              }

              // C / C++
              else if (langId === "c" || langId === "cpp") {
                count =
                  (code.match(/scanf\s*\(/g) || []).length +
                  (code.match(/cin\s*>>/g) || []).length +
                  (code.match(/getline\s*\(/g) || []).length;
              }

              // JavaScript
              else if (langId === "js") {
                count =
                  (code.match(/readline/g) || []).length +
                  (code.match(/process\.stdin/g) || []).length;
              }

              // C#
              else if (langId === "cs") {
                count = (code.match(/console\.readline\s*\(/g) || []).length;
              }

              // limit
              count = Math.min(count, 10);
              if (count > 0) {
  // Extract placeholders from input("...") prompts in code
  const rawCode = editor.getValue();
  const inputPrompts = [];
  const promptRegex = /input\s*\(\s*["'`]([^"'`]+)["'`]\s*\)/g;
  let match;
  while ((match = promptRegex.exec(rawCode)) !== null) {
    inputPrompts.push(match[1].trim());
  }

  inputContainer.innerHTML = `
    <div class="stdin-box">
      ${Array.from(
        { length: count },
        (_, i) => {
          const placeholder = inputPrompts[i] || `Enter value ${i + 1}`;
          return `
            <label>📥 Input ${i + 1}</label>
            <input type="text" id="input-${qid}-${i}" class="input-box" placeholder="${placeholder}" />
          `;
        }
      ).join("")}
    </div>`;
              } else {
                inputContainer.innerHTML = "";
              }
            });

            codeMirrorEditors[qid] = editor;
          }
        }

        // ── Execute code ──────────────────────────────────────────────
        async function executeCode(e) {
          e.preventDefault();

          const btn = e.currentTarget;
          const qid = btn.dataset.qid;
          const langId = btn.dataset.lang;
          const outputDiv = document.getElementById(`output-${qid}`);

          // 🔥 YAHAN ADD KARO IN 2 LINES
          outputDiv.style.padding = "0.3rem 1rem";
          outputDiv.style.maxHeight = "none";

          // Get code from CodeMirror or fallback textarea
          let code = codeMirrorEditors[qid]
            ? codeMirrorEditors[qid].getValue()
            : document.getElementById(`editor-${qid}`).value;

          // ✅ CHANGE 3: Empty code warning
          if (!code || code.trim() === "") {
            outputDiv.className = "output-area";
            outputDiv.innerHTML = `
              <div class="empty-code-warning">
              ⚠️ Please write your code before submitting!
              </div>`;
            return; // stop here, don't call API
          }

          // ✅ NEW: Check if input fields are empty
          const inputFields = document.querySelectorAll(
            `#input-container-${qid} .input-box`,
          );
          let missingInputs = [];

          for (let i = 0; i < inputFields.length; i++) {
            const inputField = inputFields[i];
            const inputValue = inputField.value.trim();

            if (inputValue === "") {
              missingInputs.push(`Input ${i + 1}`);
            }
          }

          //   if (missingInputs.length > 0) {
          //   outputDiv.className = "output-area error-output";
          //   outputDiv.innerHTML = `
          //     <div class="empty-code-warning">
          //       ⚠️ Please provide values for: ${missingInputs.join(', ')}<br>
          //       💡 Is program mein input dena zaroori hai!
          //     </div>`;
          //   return;
          // }
          if (missingInputs.length > 0) {
            outputDiv.className = "output-area error-output";
            outputDiv.innerHTML = `
    <div class="empty-code-warning">
     ⚠️ Please provide input  values above to run this program!
    </div>`;
            return;
          }

          // ✅ CHANGE 4: Output color — reset to default (info) while loading
          outputDiv.className = "output-area info-output";
          // outputDiv.textContent = "⚡ Running... Please wait";
          outputDiv.innerHTML = `
<div class="running-loader">
⚡ Executing Code...
</div>
`;
          btn.disabled = true;

          const languageMap = {
            py: "python",
            js: "javascript",
            cpp: "cpp",
            java: "java",
            c: "c",
            cs: "csharp",
          };

          const API_BASE = window.location.origin;

          try {
            // Collect stdin inputs
            let inputs = [];
            document
              .querySelectorAll(`[id^="input-${qid}-"]`)
              .forEach((box) => {
                inputs.push(box.value);
              });
            const userInput = inputs.join("\n");

            const response = await fetch(`${API_BASE}/tech-interview/execute`, {
              method: "POST",
              credentials: "include",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                language: languageMap[langId] || langId,
                files: [{ content: code }],
                stdin: userInput,
              }),
            });

            if (!response.ok) {
              throw new Error(`Server error (HTTP ${response.status})`);
            }

            const data = await response.json();
            let output = "";

            if (data.run?.stderr && data.run.stderr.trim() !== "") {
              // ✅ CHANGE 4: Error → red tinted output
              const stderr = data.run.stderr;
              const lineMatch =
                stderr.match(/line (\d+)/i) ||
                stderr.match(/:(\d+):\d+/) ||
                stderr.match(/\.java:(\d+)/);

              outputDiv.className = "output-area error-output";
              output = lineMatch
                ? `❌ Error on line ${lineMatch[1]}:\n${stderr}`
                : `❌ Error:\n${stderr}`;
            } else if (data.run?.stdout && data.run.stdout.trim() !== "") {
              // ✅ CHANGE 4: Success → green tinted output
              outputDiv.className = "output-area";
              output = data.run.stdout
                .replace(/enter.*?:/gi, "")
                .replace(/input.*?:/gi, "")
                .replace(/enter a .*?:/gi, "")
                .trim();
            } else {
              outputDiv.className = "output-area info-output";
              output = "⚠ Program executed but no output";
            }

            const executionTime = data.run?.executionTime || "0 ms";
            // Naya:
            outputDiv.textContent = output;
            // ✅ ADD THESE 2 LINES AFTER ABOVE LINE:
            outputDiv.scrollTop = 0; // scroll output area to top
            outputDiv.scrollIntoView({ behavior: "smooth", block: "nearest" }); // scroll page to output
          } catch (err) {
            outputDiv.className = "output-area error-output";
            outputDiv.textContent =
              "🚨 Connection error: " +
              err.message +
              "\n\n👉 Check:\n- Server running?\n- Correct URL?\n- Docker running?";
          }

          btn.disabled = false;
        }

        //copy button

        function copyCodeHandler(e) {
          const btn = e.currentTarget;
          const codeId = btn.dataset.codeid;
          const codeElement = document.getElementById(codeId);
          const codeText = codeElement.innerText;

          navigator.clipboard
            .writeText(codeText)
            .then(() => {
               showToast("✅ Code Copied!");  
              const originalText = btn.innerHTML;
              btn.innerHTML = "✅ Copied!";
              setTimeout(() => {
                btn.innerHTML = originalText;
              }, 1500);
            })
            .catch(() => {
              alert("Copy failed!");
            });
        }

        // ── Solution events ───────────────────────────────────────────
        function attachSolutionEvents() {
          document.querySelectorAll(".toggle-solution").forEach((btn) => {
            btn.removeEventListener("click", toggleSolutionHandler);
            btn.addEventListener("click", toggleSolutionHandler);
          });
          // 🔽 YAHAN ADD KARO 🔽
          document.querySelectorAll(".copy-code-btn").forEach((btn) => {
            btn.removeEventListener("click", copyCodeHandler);
            btn.addEventListener("click", copyCodeHandler);
          });
        }

        function toggleSolutionHandler(e) {
          const btn = e.currentTarget;
          const panel = document.getElementById(btn.dataset.target);
          if (panel.classList.contains("show")) {
            closeAllPanels();
            return;
          }
          closeAllPanels();
          panel.classList.add("show");
          btn.textContent = "▲ Hide Solution";
          Prism.highlightAllUnder(panel);
        }

        // ── Hint events ───────────────────────────────────────────────
        // function attachHintEvents() {
        //   document.querySelectorAll(".hint-btn").forEach((btn) => {
        //     btn.removeEventListener("click", toggleHintHandler);
        //     btn.addEventListener("click", toggleHintHandler);
        //   });
        // }

        // function toggleHintHandler(e) {
        //   const btn   = e.currentTarget;
        //   const panel = document.getElementById(btn.dataset.target);
        //   if (panel.classList.contains("show")) { closeAllPanels(); return; }
        //   closeAllPanels();
        //   panel.classList.add("show");
        //   btn.textContent = "▲ Hide Hint";
        // }
        //ai hint
        function attachHintEvents() {
          document.querySelectorAll(".hint-btn").forEach((btn) => {
            btn.removeEventListener("click", aiHintHandler);
            btn.addEventListener("click", aiHintHandler);
          });
        }

        //comp,lete working
        function aiHintHandler(e) {
          const btn = e.currentTarget;
          const target = btn.dataset.target;
          const questionId = target.replace("hint-", "");
          const panel = document.getElementById(target);
          const hintContent = panel?.querySelector(".hint-content");
          const hasHints = hintContent && hintContent.children.length > 0;
          const allDone = btn.dataset.allDone === "true";

          // Hide hint — agar sab hints show ho chuke hain
          if (allDone && panel.classList.contains("show")) {
            closeAllPanels();
            btn.textContent = "💡 Hint";
            btn.dataset.allDone = "false";
            btn.disabled = false;
            return;
          }

          // Close karo agar panel khula hai aur koi hint nahi
          if (panel.classList.contains("show") && !hasHints) {
            closeAllPanels();
            return;
          }

          // Panel kholo
          if (!panel.classList.contains("show")) {
            closeAllPanels();
            panel.classList.add("show");
          }

          handleAIHint(questionId);
        }
        // ── Rating events ─────────────────────────────────────────────
        function attachRatingEvents() {
          document.querySelectorAll(".rating-btn").forEach((btn) => {
            btn.removeEventListener("click", ratingHandler);
            btn.addEventListener("click", ratingHandler);
          });
        }

        function ratingHandler(e) {
          const btn = e.currentTarget;
          const qid = btn.dataset.qid;
          const type = btn.classList.contains("up") ? "up" : "down";
          const currentVote = userVotes[qid];

          if (!ratings[qid]) ratings[qid] = { up: 0, down: 0 };

          if (currentVote === type) {
            ratings[qid][type] -= 1;
            delete userVotes[qid];
          } else {
            if (currentVote) ratings[qid][currentVote] -= 1;
            ratings[qid][type] += 1;
            userVotes[qid] = type;
          }

          localStorage.setItem(RATINGS_KEY, JSON.stringify(ratings));
          localStorage.setItem(USER_VOTES_KEY, JSON.stringify(userVotes));

          const upBtn = btn.closest(".rating").querySelector(".rating-btn.up");
          const downBtn = btn
            .closest(".rating")
            .querySelector(".rating-btn.down");
          upBtn.querySelector(".rating-count").textContent = ratings[qid].up;
          downBtn.querySelector(".rating-count").textContent =
            ratings[qid].down;
          upBtn.classList.toggle("voted", userVotes[qid] === "up");
          downBtn.classList.toggle("voted", userVotes[qid] === "down");
        }

        // ── Live search / filter ──────────────────────────────────────
        function performSearch() {
          if (searchTerm.trim() !== "") {
            currentTopic = null;
            showAllMode = false;
          } else {
            currentTopic = null;
            showAllMode = true;
          }
          currentPage = 1;
          localStorage.removeItem(STORAGE_TOPIC);
          renderTopics();
          renderQuestions();
        }

        searchInput.addEventListener("input", function (e) {
          searchTerm = e.target.value.trim();
          performSearch();
        });
        searchBtn.addEventListener("click", function () {
          searchTerm = searchInput.value.trim();
          performSearch();
        });
        searchInput.addEventListener("keyup", function (e) {
          if (e.key === "Enter") {
            searchTerm = searchInput.value.trim();
            performSearch();
          }
        });

        showAllBtn.addEventListener("click", () => {
          showAllMode = true;
          currentTopic = null;
          currentPage = 1;
          searchTerm = "";
          searchInput.value = "";
          localStorage.removeItem(STORAGE_TOPIC);
          renderTopics();
          renderQuestions();
          if (window.innerWidth <= 900) sidebar.classList.remove("show");
        });

        // ── Initial render ────────────────────────────────────────────
        renderLanguages();
        renderTopics();
        renderQuestions();
      })(); // end IIFE

      // ── Restored functions (were in original, accidentally removed) ──
      function sanitizeCode(code) {
        return (
          code
            // remove multiline comments
            .replace(/\/\*[\s\S]*?\*\//g, "")

            // remove single line comments
            .replace(/\/\/.*$/gm, "")
            .replace(/#.*$/gm, "")

            // remove strings
            .replace(/"(?:\\.|[^"\\])*"/g, "")
            .replace(/'(?:\\.|[^'\\])*'/g, "")
            .replace(/`(?:\\.|[^`\\])*`/g, "")
        );
      }

      function getInputPlaceholder(q, index) {
        const code = (q.codeSolution || "").toLowerCase();

        // Python
        let matches = [...code.matchAll(/input\s*\(\s*["']([^"']+)["']\s*\)/g)];
        if (matches[index]) return matches[index][1];

        // C / C++
        if (code.includes("scanf")) return "Enter value";
        if (code.includes("cin")) return "Enter value";

        // Java
        if (code.includes("scanner")) return "Enter input";

        // JavaScript
        if (code.includes("prompt")) return "Enter value";

        return `Input ${index + 1}`;
      }

      function detectInputCount(q) {
        const code = (q.codeSolution || "").toLowerCase();

        let count = 0;

        // ---------- Python ----------
        let py = (code.match(/input\s*\(/g) || []).length;
        if (
          code.includes("split(") ||
          code.includes("map(") ||
          code.includes("sys.stdin")
        ) {
          py = Math.max(py, 1);
        }
        count = Math.max(count, py);

        // ---------- C ----------
        let c = (code.match(/scanf\s*\(/g) || []).length;
        count = Math.max(count, c);

        // ---------- C++ ----------
        let cpp = (code.match(/cin\s*>>/g) || []).length;
        if (code.includes("getline")) cpp = Math.max(cpp, 1);
        count = Math.max(count, cpp);

        // ---------- Java ----------
        let java = (code.match(/nextint|nextline|nextdouble|next/g) || [])
          .length;
        if (code.includes("scanner")) java = Math.max(java, 1);
        count = Math.max(count, java);

        // ---------- JS ----------
        let js = (code.match(/prompt\s*\(/g) || []).length;
        if (code.includes("readline")) js = Math.max(js, 1);
        count = Math.max(count, js);

        // ---------- Go ----------
        let go = (code.match(/fmt\.scan/g) || []).length;
        count = Math.max(count, go);

        // ---------- C# ----------
        let cs = (code.match(/console\.readline/g) || []).length;
        count = Math.max(count, cs);

        // Smart fallback
        if (count === 0) {
          const text = (q.question || "").toLowerCase();
          if (text.includes("array")) count = 1;
          else if (text.includes("two numbers")) count = 2;
          else if (text.includes("three numbers")) count = 3;
          else if (text.includes("string")) count = 1;
        }

        return Math.min(count, 10);
      }

      function questionNeedsInput(q) {
        const text = (
          (q.question || "") +
          (q.mathSolution || "") +
          (q.codeSolution || "")
        ).toLowerCase();

        const keywords = [
          "input",
          "enter",
          "given",
          "array",
          "matrix",
          "numbers",
          "elements",
          "size",
          "read",
          "take",
          "scan",
          "string",
          "integer",
        ];

        return keywords.some((word) => text.includes(word));
      }

      function mapLanguage(lang) {
        const map = {
          py: "python",
          js: "javascript",
          cpp: "cpp",
          c: "c",
          java: "java",
          cs: "csharp",
        };
        return map[lang] || lang;
      }

      // ── Default code templates (same as original) ─────────────────
      function getDefaultTemplate(lang) {
        const templates = {
          py: `# Python Starter Code\nn = int(input())\nprint(n)`,
          java: `import java.util.*;\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(n);\n    }\n}`,
          cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    cout << n;\n    return 0;\n}`,
          c: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    printf("%d", n);\n    return 0;\n}`,
          js: `// JavaScript Starter\nlet n = prompt("Enter number");\nconsole.log(n);`,
          cs: `using System;\n\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        Console.WriteLine(n);\n    }\n}`,
        };
        return templates[lang] || "";
      }
      const practiceHubBtn = document.getElementById("practiceHubBtn");

//redirect 
function goToCodeRunner() {
  window.location.href = "/tech-interview/code-arena";
};
function godsa(){
  window.location.href="/tech-interview/code-arena"
};
function aihint(){
  window.location.href="/tech-interview/code-arena" 
};
function progress(){
   window.location.href="/tech-interview/code-arena"
}