import Link from "next/link";
import Meta from "../components/Meta";
import Head from "next/head";
import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <section id="Mtc" className="flex flex-col w-full bg-mybeige">
        <Meta />

        <div className="flex flex-row ">
          <div className="w-1/6 h-screen border-r-2 border-myblack">
            <Link href="/#Work">
              <a>
                <ArrowCircleLeftIcon className="w-8 h-8 my-8 ml-4 text-myorange hover:text-myblue" />
              </a>
            </Link>
            <p className="text-base font-extrabold tracking-wider -rotate-90 mt-60 md:text-lg lg:text-xl text-myorange font-headline">
              CASE&nbsp;STUDY
            </p>
          </div>

          <div className="flex flex-col xl:flex-row">
            <div className="flex flex-col animate-fade-in-left">
              <h2 className="pt-8 pb-2 pl-4 text-base font-extrabold tracking-wide md:pt-32 font-headline md:text-xl lg:text-2xl text-myblack">
                PUP TO PAL DOG TRAINING
              </h2>
              <h3 className="pl-4 text-base font-bold tracking-wider underline transition duration-500 ease-in-out transform md:text-xl text-myorange hover:text-myblue font-body hover:-translate-y-1">
                <a href="https://puptopal.netlify.app">VIEW LIVE SITE</a>
              </h3>
              <p className="px-4 pt-12 text-sm font-semibold tracking-wide font-body md:text-lg lg:text-xl text-midtone">
                BRIEF: <br /> Design and develop a website for a new small
                business, including photography and copy writing.
              </p>
              <p className="px-4 py-12 text-sm font-semibold tracking-wide font-body md:text-lg lg:text-xl text-midtone">
                FRAMEWORKS / LIBRARIES: <br />
                React/Next.js, Tailwind CSS and UI, HeadlessUI, Framer Motion.
              </p>
            </div>
            <div className="flex flex-col animate-fade-in-left">
              <a href="https://puptopal.netlify.app">
                <img src="/ptpcard.png" alt="website mockup" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
