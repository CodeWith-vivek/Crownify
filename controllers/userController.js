const User = require("../models/userSchema");
const loadHomepage = async (req, res) => {
  try {
    return res.render("Home");
  } catch (error) {
    console.log("Home page not found");
    res.status(500).send("server error");
  }
};
const pageNotFound = async (req, res) => {
  try {
    res.render("page-404");
  } catch (error) {
    res.redirect("/pageNotFound");
  }
};
const loadSignup = async (req, res) => {
  try {
    res.render("signup");
  } catch (error) {
    console.log("Home page not loading", error);
    res.status(500).send("server error");
  }
};
const signup = async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    const newUser = new User({ name, email, phone, password });
    await newUser.save();
    res.redirect("/signup");
  } catch (error) {
    console.log("Error for save user", error);
    res.status(500).send("Internal error");
  }
};
module.exports = {
  loadHomepage,
  pageNotFound,
  loadSignup,
  signup,
};
