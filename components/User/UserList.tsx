import { User } from '@prisma/client';
import tw from 'twin.macro';
import UserItem from './UserItem';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <ul css={tw`w-full flex flex-col gap-4 select-none`}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
