import { HTMLAttributes } from 'react';
import tw from 'twin.macro';

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  tag: string;
}

const Tag: React.FC<TagProps> = ({ tag, ...rest }) => {
  return (
    <div
      css={[
        tw`max-w-max flex justify-center px-2.5 py-[2px] cursor-pointer`,
        tw`text-[#aaaaaa] border border-[#DDDDDD] rounded-xl`,
        tw`hover:bg-[#DDDDDD]`,
      ]}
      {...rest}
    >
      <span css={tw`block text-xs`}>{tag}</span>
    </div>
  );
};

export default Tag;
