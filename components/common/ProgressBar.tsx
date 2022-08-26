import { motion } from 'framer-motion';
import tw, { TwStyle } from 'twin.macro';

interface ProgressBarProps {
  progress: string | number;
  innerColor?: {
    from: TwStyle;
    to: TwStyle;
  };
}

const initalInnerColors = {
  from: tw`from-onlyOne1`,
  to: tw`to-onlyOne2`,
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  innerColor = initalInnerColors,
}) => {
  return (
    <div css={[tw`w-full h-4 text-center relative mt-4`, tw`bg-gray-300 rounded-full`]}>
      <div css={tw`text-xs`}>{progress}%</div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1.5 }}
        css={[
          tw`w-full h-full absolute top-0 rounded-full`,
          tw`bg-gradient-to-r`,
          innerColor.from,
          innerColor.to,
        ]}
      ></motion.div>
    </div>
  );
};

export default ProgressBar;
