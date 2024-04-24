import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: [1, "Email must have at least 1 character"],
    maxlength: [1000, "Email cannot be more than 1000 characters"],
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    minlength: [3, "Username must have at least 3 characters"],
    maxlength: [30, "Username cannot be more than 30 characters"],
  },
  currentLevel: {
    type: Number,
    required: true,
  },
  records: [
    {
      place: {
        type: Number,
        required: true,
      },
      lvl: {
        type: Number,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
    },
  ],
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
