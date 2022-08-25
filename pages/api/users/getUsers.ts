import prisma from '@lib/prisma';
import withHandler from '@lib/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';

async function getUsersHandler(req: NextApiRequest, res: NextApiResponse) {
  const users = await prisma.user.findMany();

  res.status(200).json(users);
}

export default withHandler(getUsersHandler);
