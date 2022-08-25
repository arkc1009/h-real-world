import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/common/Layout';
import GlobalStyles from '../styles/GlobalStyles';

import { ToastContainer } from 'react-toastify';
import { SWRConfig } from 'swr';

const fetcher = (url: string) =>
  fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE 등
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyles />
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </SessionProvider>
    </SWRConfig>
  );
}

export default MyApp;
