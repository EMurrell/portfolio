import Head from "next/head";
import Link from "next/link";
import FadeIn from "../components/FadeIn.js";
import Footer from "../components/Footer.js";
import Main1 from "../components/Main1.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>EMurrell.com</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fahkwang:wght@300;400;500;600;700&family=Syne:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Main1 />

      <Footer />
    </>
  );
}
