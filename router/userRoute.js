import express from 'express';
import { getCurrentUser, updateUser, getPermohonan, getSinglePermohonan } from '../controllers/userController.js';
import upload from '../middleware/multerMiddleware.js'

const router = express.Router();

router.route('/currentUser').get(getCurrentUser);
router.route('/permohonan').get(getPermohonan);
router.route('/update').patch(upload.single('photo'), updateUser);
router.route('/permohonan/:id').get(getSinglePermohonan)

export default router;