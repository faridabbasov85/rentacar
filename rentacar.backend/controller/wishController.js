import wishModel from "../model/wishModel.js";

export const getWishs = async (req, res) => {
  const { id } = req.params; 
  const wishs = await wishModel.find({ userId: id });
  res.json(wishs);
};

export const postWishs = async (req, res) => {
  try {
    const data = await wishModel.create(req.body);
    res.json(data);
  } catch (error) {
    
  }
};

export const deleteWishs = async (req, res) => { 
    console.log(req.body._id);

  await wishModel.findByIdAndDelete(req.body._id);
  res.json(req.body._id);
};

export default { getWishs, postWishs, deleteWishs };
