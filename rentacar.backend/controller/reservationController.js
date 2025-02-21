import reservationModel from "../model/reservationModel.js";


export const getReservation = async (req, res) => {
    try {
      const reservations = await reservationModel.find(); 
  
      if (!reservations || reservations.length === 0) {
        return res.status(404).json({ message: "Rezervasiya tapılmadı!" });
      }
      res.status(200).json(reservations);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server xətası" });
    }
  };
export const postReservation = async (req,res) => {
    try {
        await reservationModel.create(req.body);
        res.json(req.body)
    } catch (error) {
        console.error(error)
    }
}

export const deleteReservation = async (req, res) => {
  const { id } = req.params; 

  try {

    const deletedReservation = await reservationModel.findByIdAndDelete(id);
    if (!deletedReservation) {
      return res.status(404).json({ message: "Rezervasiya tapılmadı!" });
    }

    res.status(200).json({ message: "Rezervasiya uğurla silindi!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server xətası" });
  }
};
