import tw from 'twin.macro';

const Footer: React.FC = () => {
  return (
    <footer css={tw`w-full flex justify-center mt-4 px-8 py-4`}>
      <div css={tw`text-sm text-gray-500 opacity-90`}>
        Copyright 2022. DongJin Han All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
