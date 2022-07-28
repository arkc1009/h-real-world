import { css } from '@emotion/css';
import type { NextPage } from 'next';
import tw from 'twin.macro';

const Home: NextPage = () => {
  return (
    <div css={tw`flex w-full min-h-screen flex-col items-center`}>
      <section css={tw`w-full h-44 bg-[#5CB85C] shadow-inner`}></section>
    </div>
  );
};

export default Home;
