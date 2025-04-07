import mongoose, { Mongoose } from "mongoose";
const JobsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    skills: [
      {
        type: String,
        required: true,
      },
    ],
    jobType: {
      type: String,
      enum: [
        "Full-time",
        "Part-time",
        "Contract",
        "Freelance",
        "Internship",
        "Remote",
      ],
      required: true,
    },
    experienceLevel: {
      type: String,
      enum: ["Entry-level", "Mid-level", "Senior-level"],
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "drafted"],
      default: "active",
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    applicants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application",
      },
    ],
    applicationDeadline: {
      type: Date,
    },
  },
  { timestamps: true }
);

JobsSchema.index({ location: 1, jobType: 1, experienceLevel: 1 });

export const Jobs = mongoose.model("Jobs", JobsSchema);
