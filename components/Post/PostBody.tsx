import tw from 'twin.macro';

interface PostBodyProps {
  title: string;
  desc: string;
}

const PostBody: React.FC<PostBodyProps> = ({ title, desc }) => {
  return (
    <div css={tw`mb-4`}>
      <h3 css={tw`font-semibold text-2xl text-slate-900`}>{title}</h3>
      <span css={tw`font-light text-base text-[#999999]`}>{desc}</span>
    </div>
  );
};

export default PostBody;
