import Page from 'components/common/Page';
import PageContent from 'components/common/PageContent';
import { NextPage } from 'next';
import Link from 'next/link';
import tw from 'twin.macro';

const NotFound: NextPage = () => {
  return (
    <Page>
      <PageContent>
        <div css={tw`text-4xl font-bold pt-36 mb-8`}>
          404! 페이지가 존재하지 않습니다!
        </div>

        <div css={tw`hover:underline underline-offset-4`}>
          <Link href='/'>홈으로 도망가기</Link>
        </div>
      </PageContent>
    </Page>
  );
};

export default NotFound;
