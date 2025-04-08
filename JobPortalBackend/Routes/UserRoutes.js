import express from "express";
import {
  Login,
  logout,
  Register,
  UpdateProfile,
} from "../Controllers/UserController.js";
import authenticateToken from "../Middlewares/Auth.js";
const Router = express.Router();

Router.route("/register").post(Register);
Router.route("/login").post(Login);
Router.route("/logout").post(logout);
Router.route("/profile/update").post(authenticateToken, UpdateProfile);

export default Router;
