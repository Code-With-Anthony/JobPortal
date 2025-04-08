import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
        "Please enter a valid email address",
      ],
    },
    phoneNumber: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["Company", "Applicant"],
      default: "Applicant",
      // required: true,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    profile: {
      bio: {
        type: String,
      },
      skills: [
        {
          type: String,
        },
      ],
      resume: {
        type: String,
      },
      experience: [
        {
          company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Company",
          },
          position: {
            type: String,
          },
          location: {
            type: String,
          },
          startDate: {
            type: Date,
          },
          endDate: {
            type: Date,
          },
          description: {
            type: String,
          },
        },
      ],
      certifications: [
        {
          certification: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Certification",
          },
        },
      ],
      profilePhoto: {
        type: String,
        default: "",
      },
      location: {
        country: {
          type: String,
        },
        city: {
          type: String,
        },
        state: {
          type: String,
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.index({ email: 1, phoneNumber: 1 }, { unique: true });

export const User = mongoose.model("User", UserSchema);
