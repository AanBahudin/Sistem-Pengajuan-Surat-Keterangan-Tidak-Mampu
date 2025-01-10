import express from 'express'
import { getAllPermohonanKecamatan, getSinglePermohonanKecamatan, handlePengajuan } from '../controllers/kelurahanController.js'

const router = express.Router()

router.route('/')
    .get(getAllPermohonanKecamatan)

router.route('/:id')
    .get(getSinglePermohonanKecamatan)
    .patch(handlePengajuan)


export default router