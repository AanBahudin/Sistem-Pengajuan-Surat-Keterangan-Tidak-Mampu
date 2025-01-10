import { StatusCodes } from 'http-status-codes'
import { NotFoundError } from '../middleware/ErrorHandlerMiddleware.js'
import Data from '../models/DataModel.js'

export const getAllPermohonanKecamatan = async(req, res) => {
    const data = await Data.find({ kelurahan: req.user.kelurahan });
    return res.status(StatusCodes.OK).json({ ajuan: data })
}

export const getSinglePermohonanKecamatan = async(req, res) => {
    const data = await Data.findOne({_id: req.params.id, kelurahan: req.user.kelurahan})

    if (!data) {
        throw new NotFoundError('pengajuan tidak ditemukan ')
    }

    return res.status(StatusCodes.OK).json({ data })
}