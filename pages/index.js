import Head from "next/head";
import Landing from "../components/home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Swaroop | Home</title>

        <meta name="description" content="Meta description for the Home page" />
      </Head>
      <div>
        <Landing />
      </div>
    </div>
  );
}
