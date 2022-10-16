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
        tw`w-full flex items-center justify-between gap-4 py-4 px-8`,
        tw`rounded-sm`,
        tw`cursor-pointer`,
        tw`hover:bg-gray-50 hover:shadow-sm`,
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
        <div css={tw`flex flex-col text-sm`} title={user.name || '유저 이름'}>
          <div>{user.name}</div>
          <div css={tw`text-xs text-slate-600`}>믹스</div>
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
