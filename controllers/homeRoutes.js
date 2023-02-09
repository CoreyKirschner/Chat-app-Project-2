const router = require("express").Router();
const { User, Chat, Response } = require("../models");
const withAuth = require("../utils/auth.js");

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

router.get("/profile", withAuth, async (req, res) => {
  try {
    const chatData = await Chat.findAll({
      where: { userId: req.session.userId },
    });
    const chat = chatData.map((chat) => chat.get({ plain: true }));
    res.render("profile", { chat });
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
