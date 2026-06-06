const Snapshot = require("./snapshot");
async function detectChanges(pageId, currentItems) {
  if (!currentItems || currentItems.length === 0) {
    return { newItems: [], hasChanges: false };
  }

  const lastSnap = await Snapshot.findOne({ pageId }).sort({ createdAt: -1 });

  if (!lastSnap) {
    // First run — save baseline, newItems is empty (nothing to compare against yet)
    await saveSnapshot(pageId, currentItems, []);
    console.log(`[Tracker] First run for ${pageId} — ${currentItems.length} items saved as baseline`);
    return { newItems: [], hasChanges: false, isFirstRun: true };
  }

  const previousIds = new Set(lastSnap.items.map((i) => i.id));
  const newItems = currentItems.filter((item) => !previousIds.has(item.id));

  if (newItems.length > 0) {
    await saveSnapshot(pageId, currentItems, newItems);
    console.log(`[Tracker] ${pageId}: ${newItems.length} new items found`);
  } else {
    console.log(`[Tracker] ${pageId}: no changes`);
  }

  return { newItems, hasChanges: newItems.length > 0, isFirstRun: false };
}

async function saveSnapshot(pageId, items, newItems) {
  const snap = new Snapshot({
    pageId,
    items,              // full list — used for next diff
    newItems,           // only new ones — used for display
    itemCount: items.length,
  });
  await snap.save();

  // Keep only last 5 snapshots per page
  const all = await Snapshot.find({ pageId }).sort({ createdAt: -1 }).select("_id");
  if (all.length > 5) {
    const toDelete = all.slice(5).map((s) => s._id);
    await Snapshot.deleteMany({ _id: { $in: toDelete } });
  }
}
module.exports = {
  detectChanges
};