import Head from "next/head";
import "antd/dist/antd.css";
import "../styles/globals.css";
import Layout from "../comps/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>
          SmallWorld Venture | Homegrown startup community based in Phnom Penh
        </title>
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
