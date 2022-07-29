import { HTMLAttributes } from 'react';
import tw, { css } from 'twin.macro';
import Tag from '../Tag';

interface TagType extends HTMLAttributes<HTMLDivElement> {
  tag: string;
}

interface PostFooterProps {
  tags: TagType[];
}

const PostFooter: React.FC<PostFooterProps> = ({ tags }) => {
  return (
    <div css={tw`w-full flex items-center justify-between gap-4`}>
      <span css={[tw`block w-1/6 min-w-max text-[#BBBBBB] text-xs cursor-pointer`]}>
        Read More...
      </span>
      <div css={[tw`max-w-[5/6] flex gap-1 overflow-hidden`]}>
        {tags.slice(0, 4).map(({ tag, ...rest }) => (
          <Tag key={tag} tag={tag} {...rest} />
        ))}
        {tags.length > 5 && <span css={tw`text-[#BBBBBB] ml-1`}>...</span>}
      </div>
    </div>
  );
};

export default PostFooter;
