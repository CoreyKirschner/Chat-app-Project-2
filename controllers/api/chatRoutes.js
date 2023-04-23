const router = require("express").Router();
const { Chat } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  console.log(req);
  try {
    const newQuestion = await Chat.create({
      ...req.body,
      userId: req.session.userId,
    });

    res.status(200).json(newQuestion);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const chatData = await Chat.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.userId,
      },
    });

    if (!chatData) {
      res.status(404).json({ message: "No chat found with this id!" });
      return;
    }

    res.status(200).json(chatData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Chat.update(req.body, {
      where: {
        id: req.params.id,
        userId: req.session.userId
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

