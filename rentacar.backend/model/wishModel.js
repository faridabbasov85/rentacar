import mongoose from "mongoose";

export const wishSchema = mongoose.Schema({
  userId: { type: String, required: true },
  carId: { type: String, required: true },
});

export const wishModel = mongoose.model("Wishs", wishSchema);

export default wishModel;
