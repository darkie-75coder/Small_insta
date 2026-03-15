const express = require("express");
const multer = require("multer");
const cors = require("cors");
const uploadFile = require("../services/storage.service");
const postModel = require("../models/post.model");

const app = express();

const upload = multer({ storage: multer.memoryStorage() });

app.use(express.json());
app.use(cors());

app.post("/create-post", upload.single("image"), async (req, res) => {
  const image_url = await uploadFile(req.file.buffer);

  await postModel.create({
    image: image_url.url,
    caption: req.body.caption,
  });

  res.status(201).json({
    message: "Created Sucessfully!",
  });
});

app.get("/feed", async (req, res) => {
  const posts = await postModel.find();
  res.status(200).json({
    message: "Note Fetched Successfuly! ",
    posts,
  });
});

module.exports = app;
