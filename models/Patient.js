import mongoose from 'mongoose';

const patienSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dni: { type: Number, required: true, unique: true },
  phone: String,
  email: String,
  createdAt: { type: Date, default: Date.now },
});

const Patient = mongoose.model('Patient', patienSchema);
export default Patient;