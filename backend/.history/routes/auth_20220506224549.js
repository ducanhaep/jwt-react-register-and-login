const authController = require("../controllers/authControllers");

const router = require("express").Router();

// Register
router.post("/register", authController.registerUser);

// Login
router.post("/login", authController.loginUser);

// Refresh Token
router.post("/refresh", authController.requestRefreshToken);

// Logout
router.post("/logout", authController.userLogout);
module.exports = router;
