import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js'

const getCurrentUser = async(req, res) => {
    const user = await User.findOne({_id: req.user.userId})

    return res.status(StatusCodes.OK).json({ user })
};

const updateUser = async(req, res) => {
    res.send('update user');
};

export {
    getCurrentUser,
    updateUser
}