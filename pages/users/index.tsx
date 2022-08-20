import { BASE_API_URL, getData } from '@lib/fetchApi';
import { loginToast, permissionToast } from '@lib/helpers/toastManage';
import { User } from '@prisma/client';
import Banner from 'components/Banner';
import Page from 'components/common/Page';
import PageContent from 'components/common/PageContent';
import UserList from 'components/User/UserList';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import tw from 'twin.macro';

const Users: NextPage = () => {
  const { data: session, status } = useSession();

  const [users, setUsers] = useState<User[]>([]);
  const [pageLoading, setPageLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setPageLoading(true);

    if (status === 'unauthenticated') {
      router.push('/');
      setPageLoading(false);
      loginToast();

      return;
    }

    if (!session) {
      return;
    }

    if (session.role !== 'ADMIN') {
      router.push('/');
      setPageLoading(false);
      permissionToast();

      return;
    }

    setPageLoading(false);

    setLoading(true);
    getData(`${BASE_API_URL}/users`)
      .then((res) => {
        setUsers(res);
        console.log(res);
      })
      .finally(() => setLoading(false));
  }, [session, router, status]);

  if (pageLoading) {
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
