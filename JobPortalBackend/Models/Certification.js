import mongoose from "mongoose";
const CertificationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Name of the certification (e.g., "AWS Certified Solutions Architect")
    },
    description: {
      type: String,
      required: true, // A brief description of the certification
    },
    authority: {
      type: String,
      required: true, // The name of the organization providing the certification
    },
    issuedDate: {
      type: Date, // Date when the certification was issued
    },
    certificationUrl: {
      type: String, // A link to the certification's verification page, if available
    },
    certificateId: {
      type: String, // ID or serial number of the certification
    },
  },
  {
    timestamps: true,
  }
);

export const Certification = mongoose.model(
  "Certification",
  CertificationSchema
);
