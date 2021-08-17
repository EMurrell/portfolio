import Head from "next/head";
import Link from "next/link";
import FadeIn from "../components/FadeIn";
import Nav from "../components/Nav";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../components/About";
import About2 from "../components/About2";
import Work from "../components/Work";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Meta />

      <Header />

      <About2 />
      <Work />
      <Contact />

      <Footer />
    </>
  );
}
