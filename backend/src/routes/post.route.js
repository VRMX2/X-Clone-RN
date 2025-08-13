import express from "express";
import {getPosts, getPost, getUserPosts, createPost} from "../controllers/post.controller.js";
import {protectRoute} from "../middleware/auth.middleware.js";
import {upload} from "../middleware/upload.middleware.js";

const router = express.Router();



router.get("/", getPosts);
router.get("/:postId", getPost);
router.get("/user/:username",getUserPosts);


router.post("/",protectRoute,upload,createPost);


export default router;