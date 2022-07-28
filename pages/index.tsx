import type { NextPage } from 'next';
import tw, { css } from 'twin.macro';
import Banner from '../components/Banner';

const Home: NextPage = () => {
  return (
    <div css={tw`flex w-full min-h-screen flex-col items-center`}>
      <Banner>
        <div css={tw`h-full flex flex-col justify-center items-center gap-4`}>
          <h1
            css={[
              tw`font-extrabold text-6xl text-white`,
              css`
                text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
              `,
            ]}
          >
            conduit
          </h1>
          <span css={tw`font-extralight text-2xl text-white`}>
            A place to share your knowledge.
          </span>
        </div>
      </Banner>
      <section css={tw`flex flex-col items-center pt-8`}>contents!</section>
    </div>
  );
};

export default Home;
