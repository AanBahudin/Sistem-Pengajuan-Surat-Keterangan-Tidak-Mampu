import express from 'express';
import { addData, getAllData, getSingleData, updateData, deleteData } from '../controllers/dataController.js';

const router = express.Router();

router.route('/')
    .get(getAllData)
    .post(addData)

router.route('/:id')
    .get(getSingleData)
    .patch(updateData)
    .delete(deleteData)


export default router