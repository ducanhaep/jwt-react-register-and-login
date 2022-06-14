const userController = require("../controllers/userController");

const router = require("express").Router();

// Get all users
router.get("/", userController.getAllUser);

module.exports = router;
