const { Thought, User, Types } = require("../models");

const UserController = {
  addUser({ x, body }, res) {

  },
  getAllUsers(req, res) {
    User.find({})
      .select("-__v")
      .sort({ _id: -1 })
      .then((userData) => res.json(userData))
      .catch((e) => {
        console.log(e);
        res.status(400).json(e);
      });
  },
  getUserById({ x }, res) {
    User.findOne({ _id: x.userId }).select("-__V").then(userData);
    if (!userData) {
      res.status(400).json(e);
      return;
    }
    res.json(userData);
  },
};
