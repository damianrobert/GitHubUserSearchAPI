import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Page from "./Page";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>GitHub user search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page />
    </div>
  );
};

export default Home;
