const router = require("express").Router();

const getAllThoughts = require("../../controllers/thought");
const getThoughtById = require("../../controllers/thought");
const addThought = require("../../controllers/thought");
const deleteThought = require("../../controllers/thought");
const addReaction = require("../../controllers/thought");
const removeReaction = require("../../controllers/thought");

router.route("/").get(getAllThoughts);

router.route("/:userId").post(addThought);

router
  .route("/:thoughtId")
  .get(getThoughtById)
  .delete(deleteThought)
  .put(addThought);

router.route("/:thoughtId/reactions").post(addReaction).delete(removeReaction);
