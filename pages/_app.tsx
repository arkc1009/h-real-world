import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/common/Layout';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}

export default MyApp;
