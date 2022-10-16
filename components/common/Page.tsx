import { HTMLAttributes } from 'react';
import tw from 'twin.macro';

interface PageProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

const Page: React.FC<PageProps> = ({ title, children, ...rest }) => {
  return (
    <div css={tw`w-full h-full flex flex-col`} {...rest}>
      <div css={[tw`w-full h-24 flex justify-start gap-2 p-8`, tw`border-b`]}>
        <h1 css={tw`text-2xl font-bold`}>{title}</h1>
      </div>
      <div css={tw`h-[calc(100% - 6rem)]`}>{children}</div>
    </div>
  );
};

export default Page;
