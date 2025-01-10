import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js'
import Data from '../models/DataModel.js'

const getCurrentUser = async(req, res) => {
    const user = await User.findOne({_id: req.user.userId})

    return res.status(StatusCodes.OK).json({ user })
};

const getPermohonan = async(req, res) => {
    const permohonan = await Data.find({id_pemohon: req.user.userId})
    return res.status(StatusCodes.OK).json({permohonan})
}

const updateUser = async(req, res) => {
    console.log(req.body);
    
    return res.status(StatusCodes.OK).json({ msg: 'berhasil update profile' })
};

export {
    getCurrentUser,
    getPermohonan,
    updateUser
}