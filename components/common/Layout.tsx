import tw from 'twin.macro';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main css={tw`min-h-[85vh]`}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
