import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  cardNumber: { type: String, required: true },
  expiry: { type: String, required: true },
  cvv: { type: String, required: true },
  name: { type: String, required: true },
});

const PaymentModel = mongoose.model("Payment", paymentSchema);

export default PaymentModel;
