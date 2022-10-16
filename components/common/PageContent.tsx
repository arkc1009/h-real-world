import { HTMLAttributes } from 'react';
import tw from 'twin.macro';

const PageContent: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
  return (
    <div css={[tw`w-full h-full flex flex-col items-center`]} {...rest}>
      {children}
    </div>
  );
};

export default PageContent;
