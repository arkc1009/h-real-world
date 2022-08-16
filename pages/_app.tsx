import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/common/Layout';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </SessionProvider>
    </>
  );
}

export default MyApp;
