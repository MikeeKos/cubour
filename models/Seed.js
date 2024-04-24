import mongoose from "mongoose";

const SeedSchema = new mongoose.Schema({
  seed: {
    type: String,
    required: true,
  },
  leaderboard: [
    {
      place: {
        type: Number,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
      leader: {
        required: true,
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
      },
    },
  ],
  level: {
    type: String,
    required: true,
  },
  creator: {
    required: true,
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

export default mongoose.models.Seed || mongoose.model("Seed", SeedSchema);
