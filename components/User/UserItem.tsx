import { Role, User } from '@prisma/client';
import { ChangeEvent } from 'react';
import tw from 'twin.macro';

interface UserItemProps {
  user: User;
  onEdit: (e: ChangeEvent<HTMLSelectElement>, id: string) => void;
}

const UserItem: React.FC<UserItemProps> = ({ user, onEdit }) => {
  return (
    <li
      key={user.id}
      css={[
        tw`w-full flex items-center justify-between gap-4 p-4`,
        tw`border-b border-gray-300 rounded-sm`,
      ]}
    >
      <div css={tw`flex items-center gap-4`}>
        {user.image ? (
          <img
            src={user.image}
            alt={`${user.name}'s profile image`}
            css={[tw`w-9 rounded-full shadow-lg`]}
          />
        ) : (
          <div>{user.name?.slice(0, 2)}</div>
        )}
        <div css={tw`font-semibold`} title={user.name || '유저 이름'}>
          {user.name}
        </div>
      </div>

      <div css={tw`flex items-center pr-2 pl-2 border-l-2 border-gray-500`}>
        <select
          value={user.role}
          onChange={(e) => onEdit(e, user.id)}
          css={tw`cursor-pointer px-2`}
        >
          <option value={Role.ADMIN}>{Role.ADMIN}</option>
          <option value={Role.MEMBER}>{Role.MEMBER}</option>
          <option value={Role.USER}>{Role.USER}</option>
        </select>
      </div>
    </li>
  );
};

export default UserItem;
