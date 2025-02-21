import express from "express";
import { postPayment } from "../controller/paymentController.js";

const router = express.Router();

router.route("/").post(postPayment);

export default router;
