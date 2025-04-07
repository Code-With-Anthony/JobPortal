import mongoose from "mongoose";
const ApplicationSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Jobs",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    otherDocuments: [
      {
        type: String, // Links to any other uploaded documents
      },
    ],
    coverLetter: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Applied", "Interview", "Rejected", "Accepted"],
      default: "Applied",
    },
    interviewScheduled: {
      type: Boolean,
      default: false,
    },
    interviewDate: {
      type: Date,
    },
    interviewStatus: {
      type: String,
      enum: ["Scheduled", "Accepted", "Rejected"],
      default: "Scheduled",
    },
    invited: {
      type: Boolean,
      default: false, // Tracks whether the candidate has been invited for an interview
    },
  },
  {
    timestamps: true,
  }
);

export const Application = mongoose.model("Application", ApplicationSchema);
