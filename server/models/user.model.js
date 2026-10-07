import mongoose from "mongoose";

// User schema
const userSchema = new mongoose.Schema(
  {
    // User's name
    name: {
      type: String,
      required: true,
      trim: true,
    },

    // User's email
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    // Password will be stored in hashed form
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  {
    // Automatically creates createdAt and updatedAt
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
