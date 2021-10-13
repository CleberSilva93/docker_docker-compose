const express = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
  },
  { collection: "users" },
);

const PORT = 3000;
const HOST = "0.0.0.0";

const app = express();

app.get("/testconnection", async (req, res) => {
  await mongoose
    .connect("mongodb://docker:docker@db:27017")
    .then(() => {
      return res.send("OK");
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
});

app.get("/", async (req, res) => {
  const user = mongoose.model(
    "users",
    userSchema,
  );

  const docker = await user.create({
    username: "docker",
    email: "docker@docker.com",
  });

  console.log(docker);
  return res.status(204).json(docker);
});

app.listen(PORT, HOST);
