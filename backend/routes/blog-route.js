const express = require("express");
const router = express.Router();
const blog = require("../models/blog");

// GET all blogs 
router.get("/", async (req, res) => {
  try {
    const blogs = await blog.find().lean();
    res.status(200).json({ blogs });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//CREATE blog 
router.post("/create", async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required." });
    }

    const blogdata = new blog({ title, content });
    await blogdata.save();

    res.status(201).json(blogdata);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//UPDATE blog
router.patch("/update/:id", async (req, res) => {
  try {
    const updateddata = req.body;
    const updated = await blog.findByIdAndUpdate(
      req.params.id,
      updateddata,
      { new: true } 
    );

    if (!updated)
      return res.status(404).json({ error: "Blog not found!" });

    res.status(200).json({ message: "Updated successfully!", updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE blog
router.delete("/delete/:id", async (req, res) => {
  try {
    const deleted = await blog.findByIdAndDelete(req.params.id);

    if (!deleted)
      return res.status(404).json({ error: "Blog not found!" });

    res.status(200).json({ message: "Blog deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
