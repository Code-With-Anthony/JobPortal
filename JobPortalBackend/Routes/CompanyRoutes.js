import express from "express";
import {
  GetAllCompanies,
  GetCompanyById,
  RegisterCompany,
  UpdateCompany,
} from "../Controllers/CompanyController.js";
import authenticateToken from "../Middlewares/Auth.js";
const Router = express.Router();

Router.route("/register").post(RegisterCompany);
Router.route("/get").get(authenticateToken, GetAllCompanies);
Router.route("/get/:id").get(authenticateToken, GetCompanyById);
Router.route("/update/:id").put(authenticateToken, UpdateCompany);

export default Router;
