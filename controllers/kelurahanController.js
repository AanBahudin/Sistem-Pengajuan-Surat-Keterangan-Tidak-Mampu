import { StatusCodes } from 'http-status-codes'
import { NotFoundError } from '../middleware/ErrorHandlerMiddleware.js'
import Data from '../models/DataModel.js'

export const kelurahanDashboard = async(req, res) => {
    const data = await Data.find({ kelurahan: req.user.kelurahan, statusAccKelurahan: 'belum', statusAccRt: 'terima' });
    const totalData = await Data.find({kelurahan: req.user.kelurahan}).countDocuments();
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

export const getAllPermohonanData = async(req, res) => {
    const data = await Data.find({ kelurahan: req.user.kelurahan, statusAccRt: 'terima'}).populate(['accByRt', 'id_pemohon'])
    return res.status(StatusCodes.OK).json({ ajuan: data })
}

export const getSinglePermohonanKecamatan = async(req, res) => {
    const data = await Data.findOne({_id: req.params.id, kelurahan: req.user.kelurahan})

    if (!data) {
        throw new NotFoundError('pengajuan tidak ditemukan ')
    }

    return res.status(StatusCodes.OK).json({ data })
}

export const handlePengajuan = async(req, res) => {
    const { id } = req.params
    const { message, status } = req.body
        
    const data = await Data.findOneAndUpdate({ _id: id }, 
        { $set: {
            'pesan.kelurahan': message,  // Update pesan.rt
            'statusAccKelurahan': status // Update statusAccRt
        }}, 
        {new: true, runValidators: true})

    return res.status(StatusCodes.OK).json({data: 'data'})
}