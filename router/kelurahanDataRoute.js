import express from 'express'
import { getAllPermohonanKecamatan } from '../controllers/kelurahanController.js'

const router = express.Router()

router.route('/')
    .get(getAllPermohonanKecamatan)



export default router