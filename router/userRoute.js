import express from 'express';
import { getCurrentUser, updateUser } from '../controllers/userController.js';

const router = express.Router();

router.route('/currentUser').get(getCurrentUser);
router.route('/update').patch(updateUser);

export default router;