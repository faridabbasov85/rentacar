import mongoose from "mongoose";

export const wishSchema = mongoose.Schema({
  image: { type: String, required: true }, // Maşının şəkili
  brand: { type: String, required: true }, // Marka
  model: { type: String, required: true }, // Model
  year: { type: Number, required: true }, // İl
  capacity: { type: Number, required: true }, // Neçə nəfərlik olduğu
  fuelConsumption: { type: String, required: true }, // Yanacaq sərfiyyatı (100km / 15L)
  fuelType: { type: String, required: true }, // Yanacaq növü (Benzin, Dizel)
  transmission: { type: String, required: true }, // Sürətlər qutusu (Avtomat, Mexanika)
  pricePerDay: { type: Number, required: true }, // Günlük icarə qiyməti
  color: { type: String, required: true }, // Rəngi
  engine: { type: Number, required: true }, // Mühərrik
});

export const wishModel = mongoose.model("Wishs", wishSchema);

export default wishModel;
