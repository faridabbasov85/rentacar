import wishModel from "../model/wishModel.js"

export const getWishs = async (req, res) => {
    const wishs = await wishModel.find()
    res.json(wishs)
}

export const postWishs = async (req, res) => {
    try {
        await wishModel.create(req.body)
        res.json(req.body)
    } catch (error) {

    }
}

export const deleteWishs = async (req, res) => {
    await wishModel.findByIdAndDelete(req.body._id)
    res.json(req.body._id)
}

export default {getWishs, postWishs, deleteWishs}