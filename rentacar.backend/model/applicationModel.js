import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  phoneNumber: { type: String, required: true }, 
  topic: { type: String, required: true }, 
  message: { type: String, required: true }, 
});

export const applicationModel = mongoose.model(
  "Application",
  applicationSchema
);

export default applicationModel;
