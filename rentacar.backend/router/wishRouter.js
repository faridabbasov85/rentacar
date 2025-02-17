import express from "express";
import {
  getWishs,
  postWishs,
  deleteWishs,
} from "../controller/wishController.js";

const router = express.Router();

router.route('/')
.get(getWishs)
.post(postWishs)
.delete(deleteWishs)

export default router
