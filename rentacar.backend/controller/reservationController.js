import reservationModel from "../model/reservationModel.js";

export const postReservation = async (req,res) => {
    try {
        await reservationModel.create(req.body);
        res.json(req.body)
    } catch (error) {
        console.error(error)
    }
}