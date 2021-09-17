import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

import User from "./models/UserModel.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middle wares
app.use(cors());
app.use(express.json());

// Connecting DB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    console.log(`Connected to MongoDB`.rainbow);
    // Starting server
    app.listen(PORT, () =>
      console.log(`Server is running on port ${PORT}...`.cyan)
    );
  });

// Routes
app.get("/", (req, res) => res.send("API is running..."));

// GET: all users
app.get("/api/users", async (req, res) => {
  let users = await User.find({});

  res.json(users);
});

// GET: get single user based on id
app.get("/api/users/:id", async (req, res) => {
  let userId = req.params.id;

  let user = await User.findById(userId);

  res.json({ ...user.toObject(), teams: [...teams] });
});

// POST: post single user based on id
app.post("/api/users", async (req, res) => {
  let userData = req.body;

  let user = await User.insertMany(userData);

  res.json(user);
});

// UPDATE: update single user based on id
app.put("/api/users/:id", async (req, res) => {
  let userId = req.params.id;
  let userData = req.body;

  let user = await User.findByIdAndUpdate(userId, userData);

  res.json(user);
});

// DELETE: get single user based on id
app.delete("/api/users/:id", async (req, res) => {
  let userId = req.params.id;

  let user = await User.findByIdAndDelete(userId);

  res.json(user);
});
