import tw from 'twin.macro';

interface PostHeaderProps {
  userName: string;
  postDate: string;
  likeCount: number | string;
  imgUrl?: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ userName, postDate, likeCount }) => {
  return (
    <div css={tw`flex items-center justify-between gap-2 mb-3`}>
      <div css={tw`flex items-center gap-2`}>
        <div css={tw`w-9 h-9 bg-amber-200 rounded-full cursor-pointer`} />
        <div css={tw`flex flex-col justify-center`}>
          <h3
            css={[
              tw`text-base text-[#5cb85c] cursor-pointer`,
              tw`hover:text-[#3d8b3d] hover:underline`,
            ]}
          >
            {userName}
          </h3>
          <span css={tw`text-xs text-[#bbbbbb]`}>{postDate}</span>
        </div>
      </div>

      <div
        css={[
          tw`text-sm text-lime-700 ring-1 ring-lime-700`,
          tw`px-2 py-[2px] cursor-pointer select-none`,
          tw`hover:bg-lime-700 hover:text-white`,
        ]}
      >
        <span css={tw`block pb-[1px]`}>{likeCount}</span>
      </div>
    </div>
  );
};

export default PostHeader;
