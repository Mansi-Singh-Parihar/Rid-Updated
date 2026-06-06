const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    id: String,
    title: String,
    link: String,
    date: String,
    scrapedAt: String,
  },
  { _id: false }
);

const SnapshotSchema = new mongoose.Schema(
  {
    pageId: {
      type: String,
      required: true,
      index: true,
    },
    items: [ItemSchema],     // full page snapshot
    newItems: [ItemSchema],  // only newly detected items
    itemCount: Number,
  },
  {
    timestamps: true,
  }
);

SnapshotSchema.index({
  pageId: 1,
  createdAt: -1,
});

module.exports =
  mongoose.models.Snapshot ||
  mongoose.model("Snapshot", SnapshotSchema);