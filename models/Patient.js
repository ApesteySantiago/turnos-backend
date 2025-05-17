import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    name: {type: String, required: true }, 
    id: { type: String, required: true, unique: true }, 
    email: { type: String }, 
    phone: { type: String }
});

export default mongoose.model('Patient', patientSchema)