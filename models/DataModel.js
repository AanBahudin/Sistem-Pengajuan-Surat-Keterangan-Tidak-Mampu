import mongoose from "mongoose";
import { userRole } from '../utils/constants.js'

const DataSchema = mongoose.Schema({
    id_pemohon : {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    nama : String
});

export default mongoose.model("User", Data)