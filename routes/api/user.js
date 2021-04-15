const router = require('express').Router();

const getAllUsers = require("../../controllers/user");
const getUserById = require("../../controllers/user");
const addUser = require("../../controllers/user");
const deleteUser = require("../../controllers/user");
const addReaction = require("../../controllers/user");
const removeReaction = require("../../controllers/user");

router 
    .route('/')
    .get(getAllUsers)
    .post(createUser)

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

router
    .route("/:id/friends/:friendId")
    .post(addFriend)
    .delete(removeFriend);
