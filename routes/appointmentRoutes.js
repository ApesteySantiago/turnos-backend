import express from 'express';
import { createAppointment, getAppointment } from '../controllers/appointmentController.js';

const router = express.Router();

router.post('/', createAppointment);
router.get('/', getAppointment);

export default router;
