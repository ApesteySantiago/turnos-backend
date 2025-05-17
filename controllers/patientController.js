import Patient from '../models/Patient.js';

export const createPatient = async (req, res) => {
    try {
        const newPatient = new Patient(req.body);
        await newPatient.save();
        res.status(201).json(newPatient);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getPatient = async (req, res) => {
    try {
        const patient = await Patient.find();
        res.json(patient);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};