import prisma from '@lib/prisma';
import withHandler from '@lib/server/withHandler';
import { User } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

async function editUsersHandler(req: NextApiRequest, res: NextApiResponse) {
  const { users } = req.body;

  if (!users) {
    res.status(400).json({ error: 'not data!' });
    return;
  }

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
}

export default withHandler(editUsersHandler, { method: 'POST' });
