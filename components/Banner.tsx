import { motion } from 'framer-motion';
import { HTMLAttributes } from 'react';
import tw from 'twin.macro';

interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  bgColor?: string;
}

const Banner: React.FC<BannerProps> = ({ ...rest }) => {
  return (
    <div
      css={[
        tw`w-full h-60 flex justify-center items-center shadow-inner`,
        tw`bg-slate-100`,
        tw`select-none`,
      ]}
      {...rest}
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        whileHover={{ scale: 1.1 }}
        src='images/logo.png'
        alt=''
        css={tw`w-96 overflow-hidden z-0`}
      />
    </div>
  );
};

export default Banner;
