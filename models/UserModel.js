import mongoose from "mongoose";
import { userRole } from '../utils/constants.js'

const UserSchema = mongoose.Schema({
    role : {
        type: String,
        enum: Object.values(userRole),
        default: userRole.USER
    },
    nama : String,
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : String,
    alamat : String,
    kelurahan : {
        type: String,
        default: 'Batupuaro'
    },
    kecamatan : {
        type: String,
        default: 'Wameo'
    },
    RT: {
        type: String,
        default: '00'
    },
    RW: {
        type: String,
        default: '00'
    },
    nomor_hp : String,
    tanggalLahir: String,
    jenisKelamin: String,
    nik : String
}, { timestamps: true });

export default mongoose.model("User", UserSchema);