import type { NextPage } from 'next';
import tw, { css } from 'twin.macro';
import Banner from '../components/Banner';
import Page from '../components/common/Page';
import PageContent from '../components/common/PageContent';
import Post, { PostType } from '../components/Post';
import Tag from '../components/Tag';

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
    { tag: 'asdsadas3' },
    { tag: 'asdsadas3' },
    { tag: 'asdsadas4' },
  ],
};

const Home: NextPage = () => {
  return (
    <Page>
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
      <PageContent>
        <div css={tw`w-full flex justify-center gap-8`}>
          <div css={tw`w-3/4 flex flex-col gap-5`}>
            <Post post={mockPost} />
            <Post post={mockPost} />
            <Post post={mockPost} />
          </div>
          <div
            css={[
              tw`w-1/4 bg-[#f3f3f3] p-2 rounded-md`,
              css`
                height: max-content;
              `,
            ]}
          >
            <h3>Popular Tags</h3>
            <div css={tw`flex flex-col gap-2 mt-2`}>
              <Tag
                tag='adsasdasd'
                css={[tw`bg-slate-500 text-white border-none`, tw`hover:bg-slate-600`]}
              />
              <Tag
                tag='adsasdasd'
                css={[tw`bg-slate-500 text-white border-none`, tw`hover:bg-slate-600`]}
              />
              <Tag
                tag='adsasdasd'
                css={[tw`bg-slate-500 text-white border-none`, tw`hover:bg-slate-600`]}
              />
            </div>
          </div>
        </div>
      </PageContent>
    </Page>
  );
};

export default Home;
