import express from 'express'
import { getAllPermohonanKecamatan, getSinglePermohonanKecamatan } from '../controllers/kelurahanController.js'

const router = express.Router()

router.route('/')
    .get(getAllPermohonanKecamatan)

router.route('/:id')
    .get(getSinglePermohonanKecamatan)



export default router