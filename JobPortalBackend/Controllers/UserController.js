import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../Models/Users.js";

// Registration
export const Register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      return res
        .status(400)
        .json({ message: "All fields are required", sucess: false });
    }
    const user = await User.findOne({ email });
    if (user) {
      console.log("user exist");
      return res.status(400).json({
        message: "User already exists",
        sucess: false,
      });
    }

    // create new user (password will be hashed automatically by pre-save hook)
    const newUser = new User({
      name,
      email,
      password,
      role,
    });

    await newUser.save();

    return res.status(200).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error in Register:", error);
    res.status(500).json({ message: "Error Occured while registering user" });
  }
};

// Login
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    // check if user exists
    let userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({
        message: "User does not exist",
        success: false,
      });
    }

    // check password
    const isPasswordValid = await bcrypt.compare(password, userExist.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid password",
        success: false,
      });
    }

    // Generate token
    const tokenData = {
      userId: userExist._id,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "Strict",
      })
      .json({
        message: "Login successful",
        success: true,
        user: {
          name: userExist.name,
          email: userExist.email,
          role: userExist.role,
          profile: userExist.profile,
        },
      });
  } catch (error) {
    console.error("Error in Login:", error);
    res.status(500).json({ message: "Error occurred in login" });
  }
};

// Logout
export const logout = (req, res) => {
  try {
    return res
      .status(200)
      .cookie("token", "", {
        maxAge: 0,
      })
      .json({
        message: "Logout successful",
        success: true,
      });
  } catch (error) {
    console.error("Error in Logout:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

// Update User Profile
export const UpdateProfile = async (req, res) => {
  try {
    const userId = req.id || req.body.id;

    const { name, phoneNumber, email, password, profile = {} } = req.body;

    const {
      bio,
      skills,
      resume,
      experience,
      certifications,
      location,
      profilePhoto,
    } = profile;

    // Build update object dynamically
    const updateData = {};

    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (phoneNumber) updateData.phoneNumber = phoneNumber;
    if (password) updateData.password = password;

    if (
      bio ||
      skills ||
      resume ||
      experience ||
      certifications ||
      location ||
      profilePhoto
    ) {
      updateData["profile"] = {};

      if (bio) updateData.profile.bio = bio;
      if (skills) updateData.profile.skills = skills;
      if (resume) updateData.profile.resume = resume;
      if (experience) updateData.profile.experience = experience;
      if (certifications) updateData.profile.certifications = certifications;
      if (location) updateData.profile.location = location;
      if (profilePhoto) updateData.profile.profilePhoto = profilePhoto;
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "Profile updated successfully",
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error in Updating Profile", error);
    res.status(500).json({
      message: "Error occurred while updating profile",
      success: false,
    });
  }
};
