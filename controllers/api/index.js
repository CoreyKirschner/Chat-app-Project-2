const router = require("express").Router();
const chatRoutes = require("./chatRoutes");
const userRoutes = require("./userRoutes");

router.use("/users", userRoutes);
router.use("/chats", chatRoutes);

module.exports = router;
