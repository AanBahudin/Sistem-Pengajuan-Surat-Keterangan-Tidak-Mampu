import mongoose from "mongoose";

const DataSchema = mongoose.Schema({

    nama: String,
    nik: String,
    jenisKelamin: String,
    pekerjaan: String,
    tanggalLahir: Date,
    tempatLahir: String,
    namaAyah: String,
    nikAyah: String,
    jenisKelaminAyah: String,
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
    fotoKtp: String,
    publicIdKtp: String,
    fotoKK: String,
    publicIdKK: String,
    alamatPemohon: String,
    alamatwali: String,
    id_pemohon : {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    nama : String
});

export default mongoose.model("Data", DataSchema)