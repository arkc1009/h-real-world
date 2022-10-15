import tw from 'twin.macro';
import Footer from './Footer';
import SideBar from './SideBar';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div css={tw`w-screen flex`}>
        <SideBar />
        <div css={tw`w-[calc(100% - 16rem)]`}>
          <main css={tw`w-full min-h-[85vh] `}>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
