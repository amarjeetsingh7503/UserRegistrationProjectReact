const express = require("express");
const User = require("../models/userModel");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const newUser = new User({ name, email, age });
    await newUser.save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    res.status(400).send("Error registering user");
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send("Error fetching users");
  }
});

module.exports = router;
