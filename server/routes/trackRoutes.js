import express from "express";
const router = express.Router();
import { postTrack, getTrack, getTrackById } from "../controllers/track.js";
import auth from "../middleware/auth.js";

router.post("/", auth, postTrack);
router.get("/", getTrack);
router.get("/:id", getTrackById);

export default router;
