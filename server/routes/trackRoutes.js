import express from "express";
const router = express.Router();
import {
  postTrack,
  getTrack,
  getTrackById,
  updateTrackStatus,
  getTracksByCreator,
} from "../controllers/track.js";
import auth from "../middleware/auth.js";

router.post("/", auth, postTrack);
router.get("/", getTrack);
router.get("/:id", getTrackById);
router.put("/:id", auth, updateTrackStatus);
router.get("/creators/:id", getTracksByCreator);

export default router;
