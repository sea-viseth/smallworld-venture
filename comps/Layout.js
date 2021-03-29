import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import { useRouter } from "next/router";
function Layout({ children }) {
  const router = useRouter();

  const path =
    router.pathname.charAt(1).toUpperCase() + router.pathname.slice(2);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Founded in 2011 as SmallWorld Cambodia, we created a shared professional workspace where progressive young business minds could explore and pursue their aspirations while transforming ideas into reality."
        />
        <meta name="keyword" content="Startup Community" />
        <title>
          {`${
            path === "" ? "Smallworldventure" : "Smallworldventure | " + path
          }`}
        </title>
      </Head>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
