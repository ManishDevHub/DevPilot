import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import { PrismaClient } from '@prisma/client';
import express from 'express';

dotenv.config();

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.options('*', cors({ origin: 'http://localhost:3000', credentials: true }));
const prisma = new PrismaClient();

app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/', (_req, res) => {
  res.send('Auth API is running');
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
