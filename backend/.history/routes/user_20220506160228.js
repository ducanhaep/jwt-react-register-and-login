const middlewareController = require("../controllers/middlewareController");
const userController = require("../controllers/userController");

const router = require("express").Router();

// GET all users
router.get("/", userController.getAllUsers);

// DELETE USER
// /v1/user:id
router.delete("/:id", userController.deleteUser);

module.exports = router;
