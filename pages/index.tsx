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
        <div css={tw`w-full grid grid-cols-2 grid-rows-[repeat(2, 250px)] gap-8`}>
          <div css={tw`col-span-2 flex justify-center items-center bg-onlyOne1 relative`}>
            <motion.div whileHover={{ x: 250 }} css={tw`w-full h-full absolute`}>
              <Image src={HyoiImg} alt='' layout='fill' objectFit='contain' />
            </motion.div>
            멤버 소개
          </div>
          <div css={tw`flex justify-center items-center bg-onlyOne2`}>마감 관리</div>
          <div css={[tw`bg-onlyOne3 bg-opacity-70`, tw`hover:bg-opacity-90`]}>
            <Link href='/users'>
              <a css={tw`flex justify-center items-center w-full h-full cursor-pointer`}>
                멤버 관리
              </a>
            </Link>
          </div>
        </div>
      </PageContent>
    </Page>
  );
};

export default Home;
