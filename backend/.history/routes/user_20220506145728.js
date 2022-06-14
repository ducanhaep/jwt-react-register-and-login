const userController = require("../controllers/userController");

const router = require("express").Router();

// GET all users
router.get("/", userController.getAllUsers);

// DELETE USER
// /v1/user:id
router.delete("/:id");

module.exports = router;
