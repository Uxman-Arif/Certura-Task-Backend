const express = require("express");
const chatrouter = express.Router();
const { getMessages } = require("../controllers/chatcontroller");
const userModel = require('../models/usermodel');

chatrouter.get("/messages/:userId", getMessages);
chatrouter.get("/users/:userId", async (req, res) => {
    const { userId } = req.params;
    try {
      const user = await userModel.findById(userId).select('name _id');  // Fetch user by userId, select only name and id
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: "Error fetching user" });
    }
  });
  
chatrouter.get("/users", async (req, res) => {
    try {
      const users = await userModel.find();  // Fetch all users
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: "Error fetching users" });
    }
  });

module.exports = chatrouter;
