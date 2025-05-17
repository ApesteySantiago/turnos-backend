import Appointment from '../models/Appointment.js';

export const createAppointment = async (req, res) => {
    try {
        const newAppointment = new Appointment(req.body);
        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch(err){
        res.status(400).json({ error: err.message });
    }
};

export const getAppointment = async(req, res) => {
    try {
        const Appointment = await Appointment.find().populate('patient');
        res.json(Appointment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};