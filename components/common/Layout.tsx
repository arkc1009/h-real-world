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
      <main css={tw`min-h-[85vh] bg-neutral-100`}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
