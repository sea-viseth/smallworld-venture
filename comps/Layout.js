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
        <title>
          {`${
            path === "" ? "Smallworldventure" : path + " - Smallworldventure"
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
