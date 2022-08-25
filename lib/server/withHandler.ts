import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

type HandlerType = (req: NextApiRequest, res: NextApiResponse) => void;

type MethodType = 'GET' | 'POST';

type AllowUsersType = 'GUEST' | 'USER' | 'MEMBER' | 'ADMIN';

type OptionType = {
  method?: MethodType;
  isPrivate?: boolean;
  allowRole?: AllowUsersType;
};

enum AllowRole {
  USER,
  MEMBER,
  ADMIN,
}

function withHandler(
  handler: HandlerType,
  options: OptionType = {
    method: 'GET',
    allowRole: 'MEMBER',
  }
) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });

    // 왜인지는 모르겠는데 이렇게 아래에서 타입가드를 한번 더,,? 해줘야함..?
    // 근데 또 초기값 초기화는 위에서 해준게 먹음 (????)
    const { method = 'GET', allowRole = 'MEMBER' } = options;

    if (
      allowRole !== 'GUEST' &&
      (!session ||
        AllowRole[session.role as 'USER' | 'MEMBER' | 'ADMIN'] < AllowRole[allowRole])
    ) {
      return res.status(401).end('You have not Permission');
    }

    if (req.method !== method) {
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}

export default withHandler;
