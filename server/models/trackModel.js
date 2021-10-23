import mongoose from "mongoose"

const trackSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
      ref: "User",
    },
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
  },
  {
    timestamps: true,
  }
)

export default mongoose.model("Track", trackSchema)
