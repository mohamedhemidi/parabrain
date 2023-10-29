import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: {
      type: String,
      enum: ["PENDING", "COMPLETED"],
      default: "PENDING",
    },
    urgent: { type: Boolean },
    importance: { type: Number, enum: [1, 2, 3, 4] },
    archived: { type: Boolean, default: false },
    from: { type: Date },
    to: { type: Date },
  },
  { timestamps: true }
);

export const TaskModel = mongoose.model("Task", taskSchema);
