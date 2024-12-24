import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  uploadAuth,
} from "../controllers/post.contoller.js";

const router = express.Router();

router.get("/upload-auth", uploadAuth); 
router.get("/", getPosts); // Get all posts
router.get("/:slug", getPost); // Get a specified post
router.post("/", createPost); // Create a post
router.delete("/:id", deletePost); // Delete the specified post

export default router;