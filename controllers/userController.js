import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js'
import Data from '../models/DataModel.js'
import cloudinary from 'cloudinary'
import { promises as fs } from 'fs'

const getCurrentUser = async(req, res) => {
    const user = await User.findOne({_id: req.user.userId})

    return res.status(StatusCodes.OK).json({ user })
};

const getPermohonan = async(req, res) => {
    const permohonan = await Data.find({id_pemohon: req.user.userId})
    return res.status(StatusCodes.OK).json({permohonan})
}

const updateUser = async(req, res) => {
    if(req.file) {
        const response = await cloudinary.v2.uploader.upload(req.file.path);
        await fs.unlink(req.file.path)

        req.body.photo = response.secure_url
        req.body.photoPublicId = response.public_id
    }
    
    const updatedUser = await User.findOneAndUpdate({ _id: req.user.userId }, req.body, { new: true, runValidators: true })
    // if (req.file && updatedUser.photoPublicId) {
    //     await cloudinary.v2.uploader.destroy(updatedUser.photoPublicId)
    // }


    return res.status(StatusCodes.OK).json({ msg: 'berhasil update profile' })
};

export {
    getCurrentUser,
    getPermohonan,
    updateUser
}