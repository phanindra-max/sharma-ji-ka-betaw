import mongoose from "mongoose";

const trackSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
      ref: "User",
    },
    creator: String,
    trackName: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    estimatedCompletionDate: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isPublic: {
      type: String,
      required: true,
      default: false,
    },
    isCompleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Track", trackSchema);
