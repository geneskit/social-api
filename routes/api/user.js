const router = require('express').Router();

const getAllUsers = require('../../controllers/thought');
const getThoughtById = require('../../controllers/thought');
const addThought = require('../../controllers/thought');
const removeThought = require('../../controllers/thought');
const addReaction = require('../../controllers/thought');
const removeReaction = require('../../controllers/thought');

router 
    .route('/')
    .get(getAllUsers)
    .post(createUser)

router
    .route('/:id')
    .get(getUserById)
    .delete(deleteUser)
    .put(updateUser)

router
    .route("/:id/friends/:friendId")
    .post(addFriend)
    .delete(removeFriend);
