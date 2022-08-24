import LinkCard from 'components/LinkCard';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import tw from 'twin.macro';
import Banner from '../components/Banner';
import Page from '../components/common/Page';
import PageContent from '../components/common/PageContent';

import HyoiImg from '../public/images/hyoi.png';

const Home: NextPage = () => {
  const { data: session } = useSession();

  // const [tasks, setTasks] = useState<TaskResponse[]>();

  useEffect(() => {
    console.log(session);
  }, [session]);

  return (
    <Page>
      <Banner />

      <PageContent>
        <div
          css={[
            tw`w-full grid grid-cols-2 grid-rows-[repeat(2, 150px)] pt-16 gap-8`,
            tw`lg:grid-rows-[repeat(2, 250px)] lg:pt-0`,
          ]}
        >
          {/* <div
            css={[
              tw`col-span-2 flex justify-center items-center relative`,
              tw`bg-onlyOne1 bg-opacity-75`,
              tw`hover:bg-opacity-100`,
            ]}
          >
            <motion.div whileHover={{ x: 250 }} css={tw`w-full h-full absolute`}>
              <Image src={HyoiImg} alt='' layout='fill' objectFit='contain' />
            </motion.div>
            <Link href='/portfolio'>
              <a css={tw`flex justify-center items-center w-full h-full cursor-pointer`}>
                멤버 소개
              </a>
            </Link>
          </div> */}

          <LinkCard
            href='/portfolio'
            content={
              <div css={[tw`w-full h-full relative overflow-hidden`]}>
                <motion.div
                  whileHover={{ y: 10 }}
                  css={[
                    tw`w-full h-full flex flex-col justify-center items-center p-8`,
                    tw`lg:justify-start lg:items-start`,
                  ]}
                >
                  <h3 css={tw`text-2xl font-bold`}>멤버 소개</h3>
                  <p css={tw`hidden lg:block`}>팀 유일의 멤버들을 소개합니다.</p>
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
                    tw`lg:justify-start lg:items-start`,
                  ]}
                >
                  <h3 css={tw`text-2xl font-bold`}>마감 관리</h3>
                  <p css={tw`hidden lg:block`}>
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
                    tw`lg:justify-start lg:items-start`,
                  ]}
                >
                  <h3 css={tw`text-2xl font-bold`}>멤버 관리</h3>
                  <p css={tw`hidden lg:block`}>가입된 멤버들을 관리합니다.</p>
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
