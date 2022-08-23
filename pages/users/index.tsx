import { BASE_API_URL, getData } from '@lib/fetchApi';
import usePrivate from '@lib/hooks/usePageAuth';
import { User } from '@prisma/client';
import Banner from 'components/Banner';
import Page from 'components/common/Page';
import PageContent from 'components/common/PageContent';
import UserList from 'components/User/UserList';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import tw from 'twin.macro';

const Users: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const { isAuth } = usePrivate();

  useEffect(() => {
    setLoading(true);
    getData(`${BASE_API_URL}/users`)
      .then((res) => {
        setUsers(res);
        console.log(res);
      })
      .finally(() => setLoading(false));
  }, []);

  if (!isAuth) {
    return (
      <div css={tw`w-screen min-h-screen flex justify-center items-center`}>
        loading...
      </div>
    );
  }

  return (
    <Page>
      <Banner />

      <h1 css={tw`text-2xl font-bold mt-8`}>유저 관리</h1>

      <PageContent>{loading ? 'loading...' : <UserList users={users} />}</PageContent>
    </Page>
  );
};

export default Users;
