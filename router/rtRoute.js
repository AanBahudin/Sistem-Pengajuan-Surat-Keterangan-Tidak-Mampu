import express from 'express'
import { getSemuaPengajuan, getSinglePengajuan, stats, updatePengajuan } from '../controllers/rtController.js'

const router = express.Router()

router.route('/')
    .get(getSemuaPengajuan)

router.route('/stats')
    .get(stats)

router.route('/:id')
    .get(getSinglePengajuan)
    .patch(updatePengajuan)

export default router