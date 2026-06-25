import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { hashPassword, comparePassword } from '../utils/hash';
import { generateToken } from '../utils/jwt';

const prisma = new PrismaClient();

export const register = async (req: Request, res: Response) => {
  const { email, password, username, name } = req.body;
  if (!email || !password || !username) {
    return res.status(400).json({ error: 'Username, email and password required' });
  }

  // Check unique constraints
  const existingEmail = await prisma.user.findUnique({ where: { email } });
  if (existingEmail) return res.status(409).json({ error: 'Email already registered' });

  const existingUsername = await prisma.user.findUnique({ where: { username } });
  if (existingUsername) return res.status(409).json({ error: 'Username already taken' });

  const hashed = await hashPassword(password);
  const user = await prisma.user.create({
    data: {
      email,
      username,
      name,
      password: hashed,
    },
  });

  const token = generateToken({ userId: user.id, email: user.email });
  res.status(201).json({ token });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body; // 'email' can be email or username
  if (!email || !password) return res.status(400).json({ error: 'Email/Username and password required' });

  const user = await prisma.user.findFirst({
    where: {
      OR: [
        { email: email },
        { username: email }
      ]
    }
  });

  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  const valid = await comparePassword(password, user.password);
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });
  const token = generateToken({ userId: user.id, email: user.email });
  res.json({ token });
};
