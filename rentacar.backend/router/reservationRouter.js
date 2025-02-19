import express from "express";
import { postReservation } from "../controller/reservationController.js";

const router = express.Router();

router.route("/")
.post(postReservation);

export default router;
