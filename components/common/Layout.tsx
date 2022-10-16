import tw from 'twin.macro';
import SideBar from './SideBar';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div css={tw`w-screen h-screen flex`}>
        <SideBar />
        <main css={tw`w-[calc(100% - 16rem)] h-full`}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
