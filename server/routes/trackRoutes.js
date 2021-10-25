import express from "express";
const router = express.Router();
import {
  postTrack,
  getTrack,
  getTrackById,
  updateTrackStatus,
} from "../controllers/track.js";
import auth from "../middleware/auth.js";

router.post("/", auth, postTrack);
router.get("/", getTrack);
router.get("/:id", getTrackById);
router.put("/:id", auth, updateTrackStatus);

export default router;
