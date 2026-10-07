import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    // Note title
    title: {
      type: String,
      required: true,
      trim: true,
    },

    // Note content
    content: {
      type: String,
      required: true,
    },

    // User who created this note
    // This creates a relationship between User and Note

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
