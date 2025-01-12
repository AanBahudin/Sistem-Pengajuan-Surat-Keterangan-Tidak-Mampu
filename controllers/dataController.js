import { StatusCodes } from "http-status-codes";
import { promises as fs } from 'fs'
import Data from '../models/DataModel.js'
import User from '../models/UserModel.js'
import cloudinary from 'cloudinary'

const addData = async(req, res) => {
    
    const user = await User.findOne({_id: req.user.userId})
    
    req.body.kelurahan = user.kelurahan
    req.body.kecamatan = user.kecamatan
    req.body.rt = user.RT
    req.body.rw = user.RW
    req.body.id_pemohon = req.user.userId
    
    if(req.files) {

        const fotoKTP = await cloudinary.v2.uploader.upload(req.files.ktp[0].path)
        const fotoKK = await cloudinary.v2.uploader.upload(req.files.kk[0].path)

        await fs.unlink(req.files.ktp[0].path)
        await fs.unlink(req.files.kk[0].path)

        req.body.ktp = fotoKTP.secure_url
        req.body.publicIdKtp = fotoKTP.public_id
        req.body.kk = fotoKK.secure_url
        req.body.publicIdKK = fotoKK.public_id
    }

    
    await Data.create(req.body)
    return res.status(StatusCodes.OK).json({msg: 'success'})
};

const getAllData = async(req, res) => {
    res.send('get all data');
};

const getSingleData = async(req, res) => {
    res.send('get single data');
};

const updateData = async(req, res) => {
    res.send('update data');
};

const deleteData = async(req, res) => {
    res.send('delete data');
};

export {
    addData,
    getAllData,
    getSingleData,
    updateData,
    deleteData
}