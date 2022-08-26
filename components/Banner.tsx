import { motion } from 'framer-motion';
import { HTMLAttributes } from 'react';
import tw from 'twin.macro';

interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  visiableImage?: boolean;
}

const Banner: React.FC<BannerProps> = ({ visiableImage = true, ...rest }) => {
  return (
    <div
      css={[
        tw`w-full h-60 flex justify-center items-center`,
        tw`bg-slate-200 shadow-inner overflow-hidden`,
        tw`select-none`,
      ]}
      {...rest}
    >
      {visiableImage ? (
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          whileHover={{ scale: 1.1 }}
          src='images/logo.png'
          alt=''
          css={tw`w-96 overflow-hidden`}
        />
      ) : null}
    </div>
  );
};

export default Banner;
