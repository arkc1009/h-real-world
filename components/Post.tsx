import { HTMLAttributes } from 'react';
import tw from 'twin.macro';
import PostBody from './Post/PostBody';
import PostFooter from './Post/PostFooter';
import PostHeader from './Post/PostHeader';
import { TagProps } from './Tag';

export interface PostType {
  userName: string;
  postDate: string;
  title: string;
  desc: string;
  likeCount: number | string;
  tags: TagProps[];
}

interface PostProps extends HTMLAttributes<HTMLDivElement> {
  post: PostType;
  isBorder?: boolean;
}

const Post: React.FC<PostProps> = ({ post, isBorder = true, ...rest }) => {
  const { userName, postDate, likeCount, title, desc, tags } = post;

  return (
    <div css={[tw`w-full`, isBorder && tw`pb-6 border-b`]} {...rest}>
      <PostHeader userName={userName} postDate={postDate} likeCount={likeCount} />
      <PostBody title={title} desc={desc} />
      <PostFooter tags={tags} />
    </div>
  );
};

export default Post;
