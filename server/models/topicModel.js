import mongoose from "mongoose";

const topicSchema = mongoose.Schema(
  {
    trackId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Track",
    },
    user: {
      type: String,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    subtopics: [String],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Topic", topicSchema);
