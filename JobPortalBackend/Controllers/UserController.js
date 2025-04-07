import { User } from "../Models/Users.js";
import bcrypt from "bcrypt";
export const Register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      return res
        .status(400)
        .json({ message: "All fields are required", sucess: false });
    }
    const user = User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
        sucess: false,
      });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    return res.status(200).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error in Register:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    // check if user exists
    let userExist = User.findOne({ email });

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
        sameSite: strict,
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
    res.status(500).json({ message: "Internal server error" });
  }
};
