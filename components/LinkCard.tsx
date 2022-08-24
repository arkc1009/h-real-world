import Link from 'next/link';
import { HTMLAttributes } from 'react';
import tw from 'twin.macro';

interface LinkCardProps extends HTMLAttributes<HTMLDivElement> {
  href: string;
  content: JSX.Element | string | number;
}

const LinkCard: React.FC<LinkCardProps> = ({ href = '/', content, ...rest }) => {
  return (
    <div css={[tw`bg-slate-300 bg-opacity-70`, tw`hover:bg-opacity-90`]} {...rest}>
      <Link href={href}>
        <a css={tw`flex justify-center items-center w-full h-full cursor-pointer`}>
          {content}
        </a>
      </Link>
    </div>
  );
};

export default LinkCard;
