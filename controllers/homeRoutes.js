const router = require("express").Router();
const { User, Chat, Response } = require("../models");

router.get("/", async (req, res) => {
  res.render("homepage");
});

router.get("/login", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/chat", async (req, res) => {
  res.render("chat");
});

router.get("/profile", async (req, res) => {
  res.render("profile");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

module.exports = router;
