const User = require("../models/User");

const userController = {
  // GET all user
  getAllUsers: async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // DELETE User
  deleteUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = userController;
