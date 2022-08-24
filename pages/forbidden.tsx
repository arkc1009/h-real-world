import Page from 'components/common/Page';
import PageContent from 'components/common/PageContent';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import tw from 'twin.macro';

const Forbidden: NextPage = () => {
  const router = useRouter();
  const onContinue = useCallback(async () => {
    try {
      await router.replace('/');
      await signOut();
      await signIn();
    } catch {
      await router.replace('/');
      await signOut();
    }
  }, [router]);

  return (
    <Page>
      <PageContent>
        <div css={tw`flex flex-col justify-center items-center pt-24 text-xl`}>
          <div>나카나카.. 당신은 아무래도 이쪽의 사람이 아닌 것 같군요...</div>
          <div>
            이곳은.. <span css={tw`font-semibold`}>허락되지 않았다..</span>
          </div>

          <motion.div
            whileHover={{ scale: 1.5 }}
            css={[
              tw`mt-8 text-4xl font-extrabold`,
              tw`hover:text-red-500 hover:underline hover:underline-offset-4`,
            ]}
          >
            <button
              type='button'
              title='클릭 시 로그인으로 넘어갑니다..'
              onClick={onContinue}
            >
              갈!!!
            </button>
          </motion.div>
        </div>
      </PageContent>
    </Page>
  );
};

export default Forbidden;
