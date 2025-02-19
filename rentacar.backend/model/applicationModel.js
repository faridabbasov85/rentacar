import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true }, //  Ad
  phoneNumber: { type: String, required: true }, // Telefon
  topic: { type: String, required: true }, // Movzu
  message: { type: String, required: true }, // Mesaj
});

export const applicationModel = mongoose.model(
  "Application",
  applicationSchema
);

export default applicationModel;
