import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import patienRoutes from './routes/patientRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();

connectDB();

app.use(express.json());

app.use('/api/patients', patienRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})