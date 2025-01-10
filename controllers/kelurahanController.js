import { StatusCodes } from 'http-status-codes'
import { NotFoundError } from '../middleware/ErrorHandlerMiddleware.js'
import Data from '../models/DataModel.js'

export const kelurahanDashboard = async(req, res) => {
    const data = await Data.find({ kelurahan: req.user.kelurahan, statusAccKelurahan: 'belum' });
    return res.status(StatusCodes.OK).json({ ajuan: data })
}

export const getAllPermohonanData = async(req, res) => {
    // leter add sort (default : belum)

    const data = await Data.find({ kelurahan: req.user.kelurahan, statusAccKelurahan: 'belum'})
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
    const { status } = req.body
        
    const data = await Data.findOneAndUpdate({ _id: id }, {statusAccKelurahan: status}, {new: true, runValidators: true})
    return res.status(StatusCodes.OK).json({data: 'data'})
}