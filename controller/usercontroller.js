const mongoose = require("mongoose");
const { UserModel } = require("../model/usermodel");
const asyncHandler = require("express-async-handler");

exports.userRegister = async (req, res) => {
  const { name, email, password, phonenumber, dob } = req.body;

  const userExist = await UserModel.findOne({ email });

  if (userExist) {
    res.status(400).json({ msg: "email id already exist" });
    return "Already Exists";
  } else {
    const newUser = await UserModel.create({
      name,
      email,
      password,
      phonenumber,
      dob,
    });
    res.status(200).json({ msg: "success" });
  }
};

exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const userEmail = await UserModel.findOne({ email });
  const userPassword = await UserModel.findOne({ password });
  // console.log(userEmail);

  try {
    if (userEmail && userPassword) {
      res.status(200).json({ msg: "success" });
    } else {
      res.status(400).json({ msg: "invalid email/password" });
    }
  } catch (e) {
    res.status(400).json({ msg: "invalid user" });
  }
})
