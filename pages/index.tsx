import LinkCard from 'components/LinkCard';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import tw from 'twin.macro';
import Banner from '../components/Banner';
import Page from '../components/common/Page';
import PageContent from '../components/common/PageContent';

const Home: NextPage = () => {
  return (
    <Page>
      <Banner />

      <PageContent>
        <div
          css={[
            tw`w-full grid grid-cols-2 grid-rows-[repeat(2, 150px)] pt-16 gap-8`,
            tw`sm:grid-rows-[repeat(2, 250px)] sm:pt-0`,
          ]}
        >
          <LinkCard
            href='/portfolio'
            content={
              <div css={[tw`w-full h-full relative overflow-hidden`]}>
                <motion.div
                  whileHover={{ y: 10 }}
                  css={[
                    tw`w-full h-full flex flex-col justify-center items-center p-8`,
                    tw`sm:justify-start sm:items-start`,
                  ]}
                >
                  <h3 css={tw`text-2xl font-bold`}>멤버 소개</h3>
                  <p css={tw`hidden sm:block`}>팀 유일의 멤버들을 소개합니다.</p>
                </motion.div>
              </div>
            }
            css={tw`col-span-2 bg-onlyOne1 bg-opacity-60`}
          />

          <LinkCard
            href='/tasks'
            content={
              <div css={[tw`w-full h-full relative overflow-hidden`]}>
                <motion.div
                  whileHover={{ x: 30 }}
                  css={[
                    tw`w-full h-full flex flex-col justify-center items-center p-8`,
                    tw`sm:justify-start sm:items-start`,
                  ]}
                >
                  <h3 css={tw`text-2xl font-bold`}>마감 관리</h3>
                  <p css={tw`hidden sm:block`}>
                    진행되고 있는 작업물들의 진행사항을 관리합니다.
                  </p>
                </motion.div>
              </div>
            }
            css={tw`bg-onlyOne2 bg-opacity-60`}
          />

          <LinkCard
            href='/users'
            content={
              <div css={[tw`w-full h-full relative overflow-hidden`]}>
                <motion.div
                  whileHover={{ x: 30 }}
                  css={[
                    tw`w-full h-full flex flex-col justify-center items-center p-8`,
                    tw`sm:justify-start sm:items-start`,
                  ]}
                >
                  <h3 css={tw`text-2xl font-bold`}>멤버 관리</h3>
                  <p css={tw`hidden sm:block`}>가입된 멤버들을 관리합니다.</p>
                </motion.div>
              </div>
            }
            css={tw`bg-onlyOne3 bg-opacity-60`}
          />
        </div>
      </PageContent>
    </Page>
  );
};

export default Home;
