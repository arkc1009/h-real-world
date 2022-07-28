import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [temp] = useState();

  useEffect(() => {
    console.log(temp);
  }, [temp]);

  return <Component {...pageProps} />;
}

export default MyApp;
