import { HTMLAttributes } from 'react';
import tw from 'twin.macro';

const Page: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return <div css={tw`w-full flex flex-col items-center`}>{children}</div>;
};

export default Page;
