import { HTMLAttributes } from 'react';
import tw from 'twin.macro';

const PageContent: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
  return (
    <div
      css={[
        tw`w-full max-w-6xl flex flex-col items-center py-12 px-4`,
        tw`xl:max-w-6xl lg:max-w-4xl md:max-w-2xl`,
      ]}
      {...rest}
    >
      {children}
    </div>
  );
};

export default PageContent;
