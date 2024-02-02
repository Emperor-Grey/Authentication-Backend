const mongoose = require("mongoose");
// import mongoose from "mongoose";
const loginSchema = require("../models/user.js");

const connect = mongoose.connect("mongodb://localhost:27017/Authentication");

// check database connection
connect
  .then(() => {
    console.log("Connected to the mongodb database");
  })
  .catch(() => {
    console.log("Database cannot be connected");
  });

// creating a model
const collection = new mongoose.model("users", loginSchema);

module.exports = collection;
