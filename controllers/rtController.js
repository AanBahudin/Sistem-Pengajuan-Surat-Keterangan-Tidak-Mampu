import { StatusCodes } from "http-status-codes"
import Data from '../models/DataModel.js'

export const getSemuaPengajuan = async(req, res) => {
    const data = await Data.find({kelurahan: req.user.kelurahan, rt: req.user.RT})
    return res.status(StatusCodes.OK).json({ data })
} 

export const getSinglePengajuan = async(req, res) => {
    const { id } = req.params

    const data = await Data.findOne({ _id: id, kelurahan: req.user.kelurahan, rt: req.user.RT })
    return res.status(StatusCodes.OK).json({ data })
}

export const stats = async(req, res) => {
    const data = await Data.find({ kelurahan: req.user.kelurahan, rt: req.user.RT, statusAccRt: 'belum' });
        const totalData = await Data.find({kelurahan: req.user.kelurahan, rt: req.user.RT}).countDocuments();
        const statusSummary = await Data.aggregate([
            {
                $group: {
                    _id: "$statusAccKelurahan",
                    count: { $sum: 1 }
                }
            }
        ])
        return res.status(StatusCodes.OK).json({ ajuan: data, totalData, statusSummary })
}

export const updatePengajuan = async(req, res) => {
    const { id } = req.params
    const { status } = req.body

    const updated = await Data.findOneAndUpdate({ _id: id, kelurahan: req.user.kelurahan, rt: req.user.RT, statusAccRt: 'belum' }, { statusAccRt: status }, { new: true, runValidators: true })
    return res.status(StatusCodes.OK).json({updated})
}
