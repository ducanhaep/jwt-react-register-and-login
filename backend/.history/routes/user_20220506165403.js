const middlewareController = require("../controllers/middlewareController");
const userController = require("../controllers/userController");

const router = require("express").Router();

// GET all users
router.get("/", middlewareController.verifyToken, userController.getAllUsers);

// DELETE USER
// /v1/user:id
router.delete(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  userController.deleteUser
);

module.exports = router;
