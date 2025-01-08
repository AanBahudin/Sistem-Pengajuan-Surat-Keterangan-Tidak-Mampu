import express from 'express';
import { getCurrentUser, updateUser, getPermohonan } from '../controllers/userController.js';

const router = express.Router();

router.route('/currentUser').get(getCurrentUser);
router.route('/permohonan').get(getPermohonan);
router.route('/update').patch(updateUser);

export default router;