import Link from "next/link";

import Head from "next/head";

import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <section
        id="Contact"
        className="flex flex-col items-center justify-center w-full bg-mybeige"
      >
        {/* <div className="flex flex-row "> */}
        {/* <div className="w-1/6 h-screen border-r-2 border-myblack">
            <p className="text-base font-extrabold tracking-wider -rotate-90 mt-60 md:text-lg lg:text-xl text-myorange font-headline">
              CONTACT
            </p>
          </div> */}
        <div>
          <h2 className="justify-center px-12 pt-24 pb-2 text-lg font-extrabold tracking-wide text-center md:pt-32 font-headline md:text-2xl lg:text-3xl text-myorange">
            FEEL FREE TO GET IN TOUCH:
          </h2>
        </div>

        <div className="flex flex-col justify-center p-12 pb-24 text-center md:flex-row ">
          <div className="flex-col px-12 py-4 ">
            <h2 className="text-base font-extrabold tracking-wide transition duration-500 ease-in-out transform md:text-xl lg:text-2xl font-headline text-myblack hover:text-myblue hover:-translate-y-1 hover:scale-110">
              EMAIL
            </h2>
            <p className="text-sm font-bold tracking-wide md:text-lg lg:text-xl font-body text-midtone">
              hello@EMurrell.com
            </p>
          </div>
          <div className="flex-col px-12 py-4 text-base font-extrabold tracking-wide hover:text-myblue">
            <h2 className="text-base font-extrabold tracking-wide transition duration-500 ease-in-out transform md:text-xl lg:text-2xl font-headline text-myblack hover:text-myblue hover:-translate-y-1 hover:scale-110">
              <a href="https://github.com/EMurrell">GITHUB</a>
            </h2>
            <p className="text-sm font-bold tracking-wide md:text-lg lg:text-xl font-body text-midtone">
              github.com/EMurrell
            </p>
          </div>
          <div className="flex-col px-12 py-4 text-base font-extrabold tracking-wide hover:text-myblue">
            <h2 className="text-base font-extrabold tracking-wide transition duration-500 ease-in-out transform md:text-xl lg:text-2xl font-headline text-myblack hover:text-myblue hover:-translate-y-1 hover:scale-110">
              <a href="https://twitter.com/MurrellWeb">TWITTER</a>
            </h2>
            <p className="text-sm font-bold tracking-wide md:text-lg lg:text-xl font-body text-midtone">
              twitter.com/MurrellWeb
            </p>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}
