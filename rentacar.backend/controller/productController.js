import productModel from "../model/productModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server xətası", error });
  }
};

export const postProducts = async (req, res) => {
  try {
    const {
      image,
      brand,
      model,
      year,
      capacity,
      fuelConsumption,
      fuelType,
      transmission,
      pricePerDay,
      color,
      engine,
    } = req.body;

    let newProduct = {
      image,
      brand,
      model,
      year,
      capacity,
      fuelConsumption,
      fuelType,
      transmission,
      pricePerDay,
      color,
      engine,
      dateAdded: new Date(),
    };

    const createdProduct = await productModel.create(newProduct);
    res.json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: "Server xətası", error });
  }
};

export const deleteProducts = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body._id);
    res.json({ message: "Maşın silindi", id: req.body._id });
  } catch (error) {
    res.status(500).json({ message: "Server xətası", error });
  }
};

export default { getProducts, postProducts, deleteProducts };
