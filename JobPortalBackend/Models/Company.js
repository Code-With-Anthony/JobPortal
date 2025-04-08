import mongoose from "mongoose";
import bcrypt from "bcrypt";

const CompanySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
    logo: {
      type: String,
    },
    location: {
      type: String,
    },
    industry: {
      type: String,
    },
    size: {
      type: String,
      enum: ["1-100", "101-500", "501-1000", "1001-5000", "5001+"],
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
    email: {
      type: String,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
        "Please enter a valid email address",
      ],
      required: true,
      unique: true,
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

CompanySchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

CompanySchema.index({ industry: 1, location: 1, size: 1 });

export const Company = mongoose.model("Company", CompanySchema);
