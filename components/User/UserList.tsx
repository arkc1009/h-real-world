import { BASE_API_URL, postData } from '@lib/fetchApi';
import { Role, User } from '@prisma/client';
import { ChangeEvent, useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import tw from 'twin.macro';
import UserItem from './UserItem';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [tempUsers, setTempUsers] = useState(users);
  const [activeChange, setActiveChange] = useState(false);

  const editRole = useCallback((e: ChangeEvent<HTMLSelectElement>, id: string) => {
    setActiveChange(true);

    setTempUsers((prevUsers) =>
      prevUsers.map((user) => {
        const editData: User = { ...user, role: e.target.value as Role };
        return user.id === id ? editData : user;
      })
    );
  }, []);

  const onReset = useCallback(() => {
    if (confirm('정말로 수정사항을 초기화 하시겠습니까?')) {
      setTempUsers(users);
      setActiveChange(false);
    }
  }, [users]);

  const onApply = useCallback(() => {
    postData(`${BASE_API_URL}/users`, tempUsers)
      .then((res) => {
        setTempUsers(res);
        setActiveChange(false);
      })
      .catch((e) => toast.error(e, { autoClose: 1500 }));
  }, [tempUsers, setTempUsers]);

  return (
    <div css={tw`w-full`}>
      <div css={tw`flex justify-between gap-4`}>
        {activeChange ? (
          <button
            type='button'
            css={[
              tw`py-2 px-4 rounded-md mb-4 shadow-sm`,
              tw`bg-onlyOne2 bg-opacity-60 `,
              tw`hover:bg-opacity-90`,
              tw`active:bg-onlyOne3 active:shadow-inner`,
            ]}
            onClick={onApply}
          >
            변경사항을 저장하시겠습니까?
          </button>
        ) : (
          <div>{null}</div>
        )}
        <button
          type='button'
          css={[
            tw`py-2 px-4 rounded-md mb-4 shadow-sm`,
            tw`bg-slate-300 bg-opacity-60 `,
            tw`hover:bg-opacity-90`,
            tw`active:bg-slate-400 active:shadow-inner`,
          ]}
          onClick={onReset}
        >
          수정사항 리셋
        </button>
      </div>

      <ul css={tw`w-full flex flex-col gap-4 select-none`}>
        {tempUsers.map((user) => (
          <UserItem key={user.id} user={user} onEdit={editRole} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
