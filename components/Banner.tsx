import { HTMLAttributes } from 'react';
import tw, { css } from 'twin.macro';

interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  bgColor?: string;
}

const Banner: React.FC<BannerProps> = ({ children, bgColor = '#5CB85C', ...rest }) => {
  return (
    <div
      css={[
        tw`w-full h-44 shadow-inner`,
        css`
          background-color: ${bgColor};
        `,
      ]}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Banner;
