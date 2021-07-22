import Head from "next/head";
import Link from "next/link";
import FadeIn from "../components/FadeIn";
import Nav from "../components/Nav";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Meta />

      <Header />

      <About />
      <Work />
      <Contact />

      <Footer />
    </>
  );
}
