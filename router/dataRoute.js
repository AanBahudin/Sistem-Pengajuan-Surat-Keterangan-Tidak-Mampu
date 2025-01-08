import express from 'express';
import { addData, getAllData, getSingleData, updateData, deleteData } from '../controllers/dataController.js';
import upload from '../middleware/multerMiddleware.js'

const router = express.Router();

router.route('/')
    .get(getAllData)
    .post(upload.fields([ {name: 'ktp', maxCount: 1}, { name: 'kk', maxCount: 1 } ]), addData)

router.route('/:id')
    .get(getSingleData)
    .patch(updateData)
    .delete(deleteData)


export default router