const { scrapeAllPages, PAGES } = require("./scraper");
const { detectChanges } = require("./detector");
// const { notifyNewItems } = require("./notify");

const INTERVAL_MS =
  parseInt(process.env.SCRAPE_INTERVAL_MS) || 12 * 60 * 60 * 1000; // 12 hours default

let isRunning = false;
let timer = null;

async function runCycle() {
  if (isRunning) {
    console.log("[Tracker] Previous cycle still running — skipping");
    return;
  }

  isRunning = true;

  console.log(
    `\n[Tracker] ── Cycle started at ${new Date().toISOString()} ──`
  );

  try {
    const scrapeResults = await scrapeAllPages();

    for (const page of PAGES) {
      const result = scrapeResults[page.id];

      if (!result) continue;

      const { newItems, hasChanges, isFirstRun } = await detectChanges(
        page.id,
        result.items
      );

      // if (hasChanges) {
      //   await notifyNewItems(page, newItems, isFirstRun);
      // }
    }

    console.log("[Tracker] ── Cycle complete ──\n");
  } catch (err) {
    console.error("[Tracker] Cycle error:", err.message);
    console.error("[Tracker] Stack:", err.stack);
    console.error("[Tracker] Time:", new Date().toISOString());
  } finally {
    isRunning = false;
  }
}

function startTracker() {
  console.log(
    `[Tracker] Starting — interval: ${INTERVAL_MS / 1000}s`
  );

  // Run immediately on start
  runCycle();

  // Then repeat on interval
  timer = setInterval(runCycle, INTERVAL_MS);
}

function stopTracker() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }

  console.log("[Tracker] Stopped");
}

module.exports = {
  startTracker,
  stopTracker,
  runCycle,
};