import PaymentModel from "../model/paymentModel.js";

export const postPayment = async (req, res) => {
  try {
    await PaymentModel.create(req.body);
    res.json(req.body);
  } catch (error) {
    console.error(error);
    
  }
};
