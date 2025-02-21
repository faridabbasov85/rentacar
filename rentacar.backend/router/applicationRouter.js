import express from "express";
import { deleteApplication, getApplication, postApplication } from "../controller/applicationController.js";

const router = express.Router();

router.route("/")
.get(getApplication)
.post(postApplication)

router.route("/:id")
  .delete(deleteApplication);

export default router;
