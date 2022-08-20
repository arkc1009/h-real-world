import { User } from '@prisma/client';
import tw from 'twin.macro';

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <li
      key={user.id}
      css={[
        tw`w-full flex items-center justify-between gap-4 py-2 px-4`,
        tw`ring-1 ring-gray-500 rounded-sm`,
      ]}
    >
      <div css={tw`flex items-center gap-2`}>
        {user.image ? (
          <img
            src={user.image}
            alt={`${user.name}'s profile image`}
            css={[tw`w-9 rounded-full shadow-lg`]}
          />
        ) : (
          <div>{user.name?.slice(0, 2)}</div>
        )}
        <div css={tw`text-sm`}>{user.name}</div>
      </div>

      <div>{user.role}</div>
    </li>
  );
};

export default UserItem;
