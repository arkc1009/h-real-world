import withHandler from '@lib/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@lib/prisma';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { taskId } = req.query;

  if (!taskId) {
    res.status(400).end('bad request!');
    return;
  }

  const task = await prisma.task.findUnique({
    where: {
      id: +taskId || 0,
    },
    include: {
      vocals: true,
      mixers: true,
      drawers: true,
      editers: true,
      designers: true,
    },
  });

  res.status(200).json(task);
}

export default withHandler(handler);
