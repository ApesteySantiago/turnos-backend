import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema ({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'patient', required: true },
    date: { type:Date, required: true },
    reason: { type: String },
    state: { type: String, default: 'pending' }
});

export default mongoose.model('Appointment', appointmentSchema);