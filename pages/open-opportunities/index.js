import Head from "next/head";
import Link from "next/link";
function index() {
  return (
    <div>
      <Head>
        <title>Open-Opportunities</title>
      </Head>
      <h1>OPEN OPPORTUNITIES</h1>
      <Link href="/open-opportunities/koompi">KOOMPI</Link>
      <Link href="/open-opportunities/va">VITAMINAIR</Link>
    </div>
  );
}

export default index;
