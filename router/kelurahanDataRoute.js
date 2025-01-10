import express from 'express'
import { kelurahanDashboard, getSinglePermohonanKecamatan, handlePengajuan } from '../controllers/kelurahanController.js'

const router = express.Router()

router.route('/')
    .get(kelurahanDashboard)

router.route('/all')
    .get()

router.route('/:id')
    .get(getSinglePermohonanKecamatan)
    .patch(handlePengajuan)


export default router