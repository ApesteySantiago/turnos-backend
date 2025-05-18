import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Turnos API is running...');
});

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('🟢 Connected to MongoDB'))
.catch((err) => console.error('🔴 MongoDB connection error:', err));

// Server start
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});