import express from "express";
import {
  getWishs,
  postWishs,
  deleteWishs,
} from "../controller/wishController.js";

const router = express.Router();

router.route("/").post(postWishs);
router.delete("/:id", deleteWishs);
router.get("/:id", getWishs);

export default router;
