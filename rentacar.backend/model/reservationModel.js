import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  age: { type: Number, required: true },
  days: { type: Number, required: true },
  date: { type: Date, required: true },
});

export const reservationModel = mongoose.model(
  "reservation",
  reservationSchema
);

export default reservationModel;
