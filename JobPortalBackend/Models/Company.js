import mongoose from "mongoose";
const CompanySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
    },
    location: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      enum: ["1-100", "101-500", "501-1000", "1001-5000", "5001+"],
      required: true,
    },
    totalEmployees: {
      type: Number,
      default: 0,
    },
    socialLinks: {
      linkedin: String,
      twitter: String,
      facebook: String,
    },
    contactEmail: {
      type: String,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
        "Please enter a valid email address",
      ],
    },
    employees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    jobs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Jobs",
      },
    ],
  },
  {
    timestamps: true,
  }
);

CompanySchema.index({ industry: 1, location: 1, size: 1 });

export const Company = mongoose.model("Company", CompanySchema);
