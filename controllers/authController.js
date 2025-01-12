import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js'
import { comparePassword, hashPassword } from '../utils/passwordUtils.js'
import { createToken } from '../utils/jwt.js'
import { NotAuthenticatedError } from '../middleware/ErrorHandlerMiddleware.js'

const login = async(req, res) => {

    const user = await User.findOne({email: req.body.email})
    
    const isPasswordValid = await comparePassword(req.body.password, user.password);

    if (!isPasswordValid) {
        throw new NotAuthenticatedError('Password salah')
    }

    let payload = { userId: user._id, role: user.role, email: user.email, kelurahan: user.kelurahan || '', RT: user.RT || "00" }
    const token = createToken(payload)
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    });


    const { password, ...userWithoutPassword } = user._doc;
    return res.status(StatusCodes.OK).json({ msg: 'berhasil login',  user: userWithoutPassword})

};

const register = async(req, res) => {

    req.body.password = await hashPassword(req.body.password)
    await User.create(req.body)
    return res.status(StatusCodes.OK).json({msg: 'Berhasil daftar'})
};

const logout = async(req, res) => {
    res.cookie('token', 'logout', {
        expires: new Date(Date.now())
    })

    return res.status(StatusCodes.OK).json({ msg: 'Successfully logout' })
}

export {
    login,
    register,
    logout
}