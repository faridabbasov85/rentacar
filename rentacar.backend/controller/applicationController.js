import applicationModel from "../model/applicationModel.js";

export const postApplication = async (req, res) => {
  try {
    await applicationModel.create(req.body);
    res.json(req.body);
  } catch (error) {}
};
