const { Thought, User, Types } = require("../models");

const ThoughtController = {
  addThought({ x, body }, res) {

  },
  getAllThoughts(req, res) {
    Thought.find()
      .select("-__v")
      .sort({ _id: -1 })
      .then((thoughtData) => res.json(thoughtData))
      .catch((e) => {
        console.log(e);
        res.status(400).json(e);
      });
      
  },
  getThoughtById({ x }, res) {
    Thought.findOne({ _id: x.thoughtId }).select("-__V").then(thoughtData);
    if (!thoughtData) {
      res.status(400).json(e);
      return;
    }
    res.json(thoughtData);
  },
};
