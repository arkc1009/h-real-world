import type { NextPage } from 'next';
import tw, { css } from 'twin.macro';
import Banner from '../components/Banner';
import Post, { PostType } from '../components/Post';

const mockPost: PostType = {
  userName: 'Germoe',
  postDate: new Date().toLocaleDateString(),
  likeCount: Math.floor(Math.random() * 5000),
  title: 'Create...',
  desc: 'join the commun...',
  tags: [
    { tag: 'asdsadas' },
    { tag: 'asdsadas1' },
    { tag: 'asdsadas2' },
    { tag: 'asdsadas3' },
    { tag: 'asdsadas4' },
  ],
};

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

      <section css={tw`w-full max-w-6xl flex flex-col px-4 pt-8`}>
        <div css={tw`px-32`}>
          <Post post={mockPost} />
        </div>
      </section>
    </div>
  );
};

export default Home;
