import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  age: { type: String, required: true },
  days: { type: String, required: true },
  date: { type: String, required: true },
});

export const reservationModel = mongoose.model(
  "reservation",
  reservationSchema
);

export default reservationModel;
