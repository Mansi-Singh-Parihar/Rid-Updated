// import https from "https";

// const TOKEN   = process.env.TELEGRAM_BOT_TOKEN;
// const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// function sendTelegram(text) {
//   return new Promise((resolve, reject) => {
//     if (!TOKEN || !CHAT_ID) {
//       console.warn("[Tracker] Telegram not configured — skipping notification");
//       return resolve();
//     }

//     const body = JSON.stringify({
//       chat_id:                  CHAT_ID,
//       text,
//       parse_mode:               "HTML",
//       disable_web_page_preview: true,
//     });

//     const req = https.request(
//       {
//         hostname: "api.telegram.org",
//         path:     `/bot${TOKEN}/sendMessage`,
//         method:   "POST",
//         headers:  { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(body) },
//       },
//       (res) => {
//         res.on("data", () => {});
//         res.on("end", resolve);
//       }
//     );

//     req.on("error", reject);
//     req.write(body);
//     req.end();
//   });
// }

// export async function notifyNewItems(page, newItems, isFirstRun) {
//   if (!TOKEN || !CHAT_ID) return;
//   if (isFirstRun) {
//     await sendTelegram(
//       `${page.emoji} <b>${page.name} tracker activated!</b>\n` +
//       `Baseline: <b>${newItems.length} items</b> saved.\n` +
//       `You'll be notified of new additions from now.`
//     ).catch(console.error);
//     return;
//   }

//   const MAX = 5;
//   const toShow = newItems.slice(0, MAX);
//   const extra  = newItems.length - toShow.length;

//   let msg = `${page.emoji} <b>New on ${page.name}!</b>\n`;
//   msg += `━━━━━━━━━━━━━━━━━━\n\n`;

//   for (const item of toShow) {
//     msg += `📌 <b>${esc(item.title)}</b>\n`;
//     if (item.date) msg += `📅 Date: ${esc(item.date)}\n`;
//     if (item.link) msg += `🔗 <a href="${item.link}">View Details</a>\n`;
//     msg += "\n";
//   }

//   if (extra > 0) msg += `<i>...and ${extra} more. Check the page.</i>\n`;
//   msg += `\n⏰ <i>${formatIST()}</i>`;

//   await sendTelegram(msg).catch(console.error);
// }

// function esc(str) {
//   return (str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
// }

// function formatIST() {
//   return new Date().toLocaleString("en-IN", {
//     timeZone: "Asia/Kolkata",
//     day: "2-digit", month: "short", year: "numeric",
//     hour: "2-digit", minute: "2-digit",
//   });
// }
