import express from "express";
import { addTopic, getTopicsById, getTopics } from "../controllers/topics.js";
const router = express.Router();
import auth from "../middleware/auth.js";

router.post("/", auth, addTopic);
router.get("/", getTopics);
router.get("/:id", getTopicsById);

export default router;
