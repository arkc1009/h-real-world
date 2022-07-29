import { HTMLAttributes } from 'react';
import tw from 'twin.macro';

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  tag: string;
}

const Tag: React.FC<TagProps> = ({ tag, ...rest }) => {
  return (
    <div
      css={[
        tw`flex justify-center px-2 py-[2px] cursor-pointer`,
        tw`border border-[#DDDDDD] rounded-xl`,
        tw`hover:bg-[#DDDDDD]`,
      ]}
      {...rest}
    >
      <span css={tw`block text-[#aaaaaa] text-xs`}>{tag}</span>
    </div>
  );
};

export default Tag;
