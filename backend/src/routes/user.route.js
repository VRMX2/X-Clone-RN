import express from "express";
import { getUserProfile, updateProfile, syncUser, getCurrentUser, followUser} from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/profile/:username", getUserProfile);

router.post("/sync", protectRoute, syncUser);
router.put("/profile", protectRoute, updateProfile);
router.get("/me", protectRoute, getCurrentUser);
router.post("/follow/:targetUserId", protectRoute, followUser);

export default router;