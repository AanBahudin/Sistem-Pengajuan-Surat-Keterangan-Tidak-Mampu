import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({

    nama: String,
    nik: String,
    jenisKelamin: String,
    pekerjaan: String,
    tanggalLahir: Date,
    tempatLahir: String,
    namaAyah: String,
    nikAyah: String,
    jenisKelaminAyah: String,
    pekerjaanAyah: String,
    tanggalLahirAyah: String,
    tempatLahirAyah: String,
    namaIbu: String,
    nikIbu: String,
    jenisKelaminIbu: String,
    pekerjaanIbu: String,
    tanggalLahirIbu: String,
    tempatLahirIbu: String,
    kecamatan: String,
    kelurahan: String,
    rt: String,
    rw: String,
    ktp: String,
    publicIdKtp: String,
    lat: Number,
    long: Number,
    kk: String,
    publicIdKK: String,
    alamatPemohon: String,
    alamatwali: String,
    alasanPengajuan: String,
    accByRt: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    pesan : {
        kelurahan: {
            type: String,
            default: ''
        },
        rt: {
            type: String,
            default: ''
        }
    },
    id_pemohon : {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    statusAccRt: {
        type: String,
        default: 'belum'
    },
    statusAccKelurahan: {
        type: String,
        default: 'belum'
    },
    statusPengajuanUlang: {
        type: Boolean,
        default: false
    },
}, { timestamps:true });

export default mongoose.model("Data", DataSchema)