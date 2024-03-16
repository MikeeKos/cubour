import mongoose from "mongoose";

const SeedSchema = new mongoose.Schema({
  seed: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Seed || mongoose.model("Seed", SeedSchema);
