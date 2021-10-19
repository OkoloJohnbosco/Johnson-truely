import { useEffect } from "react";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/index";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });
  const load = () => {
    NProgress.start();
  };

  const stop = () => {
    NProgress.done();
  };

  useEffect(() => {
    Router.events.on("routeChangeStart", load);
    Router.events.on("routeChangeComplete", stop);
    Router.events.on("routeChangeError", stop);

    return () => {
      Router.events.off("routeChangeStart", load);
      Router.events.off("routeChangeComplete", stop);
      Router.events.off("routeChangeError", stop);
    };
  }, []);

  return (
    <ChakraProvider theme={theme} resetCSS>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <meta charSet="utf-8" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
