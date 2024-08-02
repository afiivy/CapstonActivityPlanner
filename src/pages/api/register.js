import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'User already exists' });
  }
};