import { Company } from "../Models/Company.js";

// Register Company
export const RegisterCompany = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(401)
        .json({ message: "All fields are required", success: false });
    }

    let company = await Company.findOne({ name });

    if (company) {
      return res
        .status(401)
        .json({ message: "Company already exists", success: false });
    }

    company = await Company.create({
      name: name,
      email: email,
      password: password,
      employees: req.id,
    });

    return res.status(201).json({
      message: "Company registered successfully",
      success: true,
      company,
    });
  } catch (error) {
    console.error("Error in Registering Company", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

// Get All Companies
export const GetAllCompanies = async (req, res) => {
  try {
    const userId = req.id; //loggedin user id
    console.log("userid: ", userId);
    const companies = await Company.find({ userId });

    if (!companies) {
      return res.status(404).json({
        message: "No companies found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Companies fetched successfully",
      success: true,
      companies,
    });
  } catch (error) {
    console.error("Error in getting all companies", error);
    res.status(500).json({
      message: "Error Occurred in fetching all companies",
      success: false,
    });
  }
};

// Get Company by ID
export const GetCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Company fetched successfully",
      success: true,
      company,
    });
  } catch (error) {
    console.error("Error in getting company by Id", error);
    res.status(500).json({
      message: "Error occured in fetching company by Id",
      success: false,
    });
  }
};

// Update Company
export const UpdateCompany = async (req, res) => {
  try {
    const {
      name,
      description,
      website,
      logo,
      location,
      industry,
      size,
      totalEmployees,
      socialLinks,
      contactEmail,
    } = req.body;

    const file = req.file;

    const updateData = {};

    if (name) updateData.name = name;
    if (description) updateData.description = description;
    if (website) updateData.website = website;
    if (logo) updateData.logo = logo;
    if (location) updateData.location = location;
    if (industry) updateData.industry = industry;
    if (size) updateData.size = size;
    if (totalEmployees) updateData.totalEmployees = totalEmployees;
    if (socialLinks) updateData.socialLinks = socialLinks;
    if (contactEmail) updateData.contactEmail = contactEmail;
    if (file) updateData.logo = file.path;

    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Company updated successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error in updating company details", error);
    res.status(500).json({
      message: "Error occured in updating company details",
      success: false,
    });
  }
};
