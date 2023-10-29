import mongoose, { Schema } from "mongoose";

const listSchema = new Schema(
  {
    title: { type: String },
    color: {
      type: String,
      enum: ["WHITE", "GREEN", "RED", "YELLOW"],
      default: "WHITE",
    },
    pinned: { type: Boolean, default: false },
    guarded: { type: Boolean, default: false },
    archived: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const ListModel = mongoose.model("List", listSchema);
