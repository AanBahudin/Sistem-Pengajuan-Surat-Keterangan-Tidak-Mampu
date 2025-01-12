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
    alamat : {
        type: String,
        default: ''
    },
    kelurahan : {
        type: String,
        default: 'Wameo'
    },
    kecamatan : {
        type: String,
        default: 'Batupoaro'
    },
    pekerjaan: {
        type: String,
        default: ''
    },
    RT: {
        type: String,
        default: ''
    },
    RW: {
        type: String,
        default: ''
    },
    nomor_hp : {
        type: String,
        default: ''
    },
    tanggalLahir: {
        type: Date,
        default: Date.now()
    },
    tempatLahir: {
        type: String,
        default: ''
    },
    jenisKelamin: {
        type: String,
        default: "Pria"
    },
    nik : {
        type: String,
        default: ""
    },
    photo: {
        type: String,
        default: ''
    },
    photoPublicId: {
        type: String,
        default: ''
    }
}, { timestamps: true });

export default mongoose.model("User", UserSchema);