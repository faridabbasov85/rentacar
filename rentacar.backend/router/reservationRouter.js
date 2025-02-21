import express from "express";
import { deleteReservation, getReservation, postReservation } from "../controller/reservationController.js";

const router = express.Router();

router.route("/")
  .get(getReservation)
  .post(postReservation);

router.route("/:id")
  .delete(deleteReservation);

export default router;
