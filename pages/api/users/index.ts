import prisma from '@lib/prisma';
import { User } from '@prisma/client';
import UserItem from 'components/User/UserItem';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
      } catch (e) {
        console.error('Request error', e);
        res.status(500).json({ error: 'Error fetching users' });
      }
      break;
    case 'POST':
      try {
        const { body: users } = req;

        const changeUsers = await prisma.$transaction(
          users.map((user: User) =>
            prisma.user.upsert({
              create: user,
              update: {
                role: user.role,
              },
              where: {
                id: user.id,
              },
            })
          )
        );

        res.status(200).json(changeUsers);
      } catch (e) {
        console.error('Request error', e);
        res.status(500).json({ error: 'Error Updating Users' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
