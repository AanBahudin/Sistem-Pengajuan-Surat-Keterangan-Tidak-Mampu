import express from 'express'
import { kelurahanDashboard, getSinglePermohonanKecamatan, handlePengajuan, getAllPermohonanData } from '../controllers/kelurahanController.js'

const router = express.Router()

router.route('/')
    .get(kelurahanDashboard)

router.route('/all')
    .get(getAllPermohonanData)

router.route('/:id')
    .get(getSinglePermohonanKecamatan)
    .patch(handlePengajuan)


export default router