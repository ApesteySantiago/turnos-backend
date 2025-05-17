import express from 'express';
import { createPatient, getPatient } from '../controllers/patientController.js';

const router = express.Router();

router.post('/', createPatient);
router.get('/', getPatient);

export default router;