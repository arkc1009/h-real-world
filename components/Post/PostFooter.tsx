import { HTMLAttributes } from 'react';
import tw from 'twin.macro';
import Tag from '../Tag';

interface TagType extends HTMLAttributes<HTMLDivElement> {
  tag: string;
}

interface PostFooterProps {
  tags: TagType[];
}

const PostFooter: React.FC<PostFooterProps> = ({ tags }) => {
  return (
    <div css={tw`w-full flex justify-between`}>
      <span css={tw`text-[#BBBBBB] text-xs cursor-pointer`}>Read More...</span>
      <div css={tw`flex gap-1 overflow-hidden`}>
        {tags.slice(0, 5).map(({ tag, ...rest }) => (
          <Tag key={tag} tag={tag} {...rest} />
        ))}
        {tags.length > 5 && <span css={tw`text-[#BBBBBB] ml-1`}>...</span>}
      </div>
    </div>
  );
};

export default PostFooter;
