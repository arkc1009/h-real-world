import useMutation from '@lib/hooks/useMutation';
import { Role, User } from '@prisma/client';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import tw from 'twin.macro';
import UserItem from './UserItem';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [editUsers, { loading, error, data }] = useMutation('/users/editUsers');
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
    if (activeChange && confirm('정말로 수정사항을 초기화 하시겠습니까?')) {
      setTempUsers(users);
      setActiveChange(false);
    }
  }, [users, activeChange]);

  const onApply = useCallback(() => {
    editUsers({ users: tempUsers });
  }, [tempUsers, editUsers]);

  useEffect(() => {
    if (data) {
      if (!data.error) {
        setTempUsers(data);
        setActiveChange(false);
        toast.success('수정을 성공했습니다!', {
          autoClose: 1500,
          position: 'top-center',
        });
      } else {
        toast.error(data.error, { autoClose: 1500, position: 'top-center' });
      }
    }
  }, [data, loading, error]);

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
            tw`disabled:opacity-50 disabled:hover:bg-opacity-50`,
            tw`hover:bg-opacity-90`,
            tw`active:bg-slate-400 active:shadow-inner`,
          ]}
          onClick={onReset}
          disabled={!activeChange}
        >
          수정사항 리셋
        </button>
      </div>

      {loading && error ? (
        'loading...'
      ) : (
        <ul css={tw`w-full flex flex-col gap-4 select-none`}>
          {tempUsers.length !== 0
            ? tempUsers.map((user) => (
                <UserItem key={user.id} user={user} onEdit={editRole} />
              ))
            : '아직 가입된 멤버가 없는 것 같아요..'}
        </ul>
      )}
    </div>
  );
};

export default UserList;
