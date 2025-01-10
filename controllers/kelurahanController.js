import { StatusCodes } from 'http-status-codes'
import Data from '../models/DataModel.js'

export const getAllPermohonanKecamatan = async(req, res) => {

    console.log(req.user);
    
    const data = await Data.find({ kelurahan: req.user.kelurahan });
    

    return res.status(StatusCodes.OK).json({ ajuan: data })
}