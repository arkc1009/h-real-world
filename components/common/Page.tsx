import { HTMLAttributes } from 'react';
import tw from 'twin.macro';

const Page: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
  return (
    <div css={tw`w-full flex flex-col items-center`} {...rest}>
      {children}
    </div>
  );
};

export default Page;
