const router = require("express").Router();
const chatRoutes = require("./chatRoutes");
const userRoutes = require("./userRoutes");
const responseRoutes = require("./responseRoutes");

router.use("/users", userRoutes);
router.use("/chats", chatRoutes);
router.use("/response", responseRoutes);

module.exports = router;
