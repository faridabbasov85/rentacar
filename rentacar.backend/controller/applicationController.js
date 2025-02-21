import applicationModel from "../model/applicationModel.js";


export const getApplication = async (req, res) => {
  try {
    const applications = await applicationModel.find(); 
    res.status(200).json(applications); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Xəta baş verdi" }); 
  }
};

export const postApplication = async (req, res) => {
  try {
    await applicationModel.create(req.body);
    res.json(req.body);
  } catch (error) {}
};


export const deleteApplication = async (req, res) => {
  try {
    
    const deletedApplication = await applicationModel.findByIdAndDelete(req.params.id);

    if (!deletedApplication) {
      return res.status(404).json({ message: "Müraciət tapılmadı" });
    }

    res.status(200).json({ message: "Müraciət uğurla silindi" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Xəta baş verdi" });
  }
};
