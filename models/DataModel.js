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
    ktp: String,
    publicIdKtp: String,
    kk: String,
    publicIdKK: String,
    alamatPemohon: String,
    alamatwali: String,
    alasanPengajuan: String,
    id_pemohon : {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    statusAccRt: {
        type: Boolean,
        default: false
    },
    statusAccKelurahan: {
        type: String,
        default: 'belum'
    },
    statusPengajuanUlang: {
        type: Boolean,
        default: false
    },
    pesan: {
        type: String,
    }
}, { timestamps:true });

export default mongoose.model("Data", DataSchema)