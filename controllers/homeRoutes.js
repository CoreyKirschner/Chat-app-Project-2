const router = require("express").Router();
const { User, Chat, Response } = require("../models");
const withAuth = require("../utils/auth.js");

router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/chat", async (req, res) => {
  try {
    res.render("chat");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    const chatData = await Chat.findAll({
      where: { userId: req.session.userId },
    });
    const chat = chatData.map((chat) => chat.get({ plain: true }));
    res.render("profile", { chat });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
