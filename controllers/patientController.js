import Patient from "../models/Patient.js";

export const createPatient = async (req, res) => {
  try {
    const patient = new Patient(req.body);
    const saved = await patient.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message});
  }
};

export const getPatients = async (req, res) => {
  try{
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ message: 'Paciente no encontrado.' });
    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePatient  = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!patient) return res.status(404).json({ message: 'Paciente no enccontrado.' });
    res.json(patient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (!patient) return res.status(404).json({ message: 'Paciente no encontrado.'});
    res.json({ message: 'Paciente eliminado.'});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};