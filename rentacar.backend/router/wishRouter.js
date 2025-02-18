import express from "express";
import {
  getWishs,
  postWishs,
  deleteWishs,
} from "../controller/wishController.js";

const router = express.Router();

router.route('/')
.post(postWishs)
.delete(deleteWishs)

router.get('/:id',getWishs);

export default router
