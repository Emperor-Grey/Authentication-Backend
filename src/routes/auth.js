const express = require("express");
const { RegisterUser, LoginUser } = require("../controllers/Auth");

const router = express.Router();

router.post("/register", RegisterUser);
router.get("/register", (req, res) => {
  res.render("register");
});
router.post("/login", LoginUser);
router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
