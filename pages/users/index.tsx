import usePrivate from '@lib/hooks/usePageAuth';
import { UserResponse } from '@lib/schema';
import Banner from 'components/Banner';
import Page from 'components/common/Page';
import PageContent from 'components/common/PageContent';
import UserList from 'components/User/UserList';
import { NextPage } from 'next';
import Link from 'next/link';
import useSWR from 'swr';
import tw from 'twin.macro';

const Users: NextPage = () => {
  const { data: users, error } = useSWR<UserResponse[]>('/api/users/getUsers');

  const { isAuth } = usePrivate();

  if (!isAuth) {
    return (
      <div css={tw`w-screen min-h-screen flex justify-center items-center`}>
        loading...
      </div>
    );
  }

  return (
    <Page>
      <Banner visiableImage={false} css={tw`h-[1px]`} />

      <div
        css={[tw`flex flex-col items-center gap-2 mt-8`, tw`xl:flex-row xl:items-end`]}
      >
        <h1 css={tw`text-2xl font-bold`}>유저 관리</h1>
        <h3 css={[tw`text-sm underline`, tw`hover:opacity-70`, tw`xl:text-base`]}>
          <Link href='/'>홈으로 돌아가기</Link>
        </h3>
      </div>

      <PageContent>
        {!users && !error ? 'loading...' : <UserList users={users || []} />}
      </PageContent>
    </Page>
  );
};

export default Users;
