const express = require("express");
const router = express.Router();
const UserController = require("../Controller/UserController");

// When a user is being registered the first time, allow the creation of it
// *** We will NOT implement all the CRUD operations, but you can if you want on your own ***
router.post("/create-user", UserController.createUser);
router.post("/login-user", UserController.loginUser);

module.exports = router;
