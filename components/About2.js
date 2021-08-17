import Link from "next/link";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="About" className="flex flex-col w-full h-screen bg-mybeige">
      <div className="flex flex-row h-1/2 ">
        <div className="w-1/6 pt-24">
          <p className="text-base font-extrabold tracking-wider -rotate-90 md:text-lg lg:text-xl text-myorange font-headline">
            BIO
          </p>
        </div>

        <div className="flex flex-col w-5/6 pr-12 md:pr-60 ">
          <FadeIn>
            <h2 className="pt-12 pb-2 pl-4 text-base font-semibold tracking-wider md:pt-28 font-body md:text-xl lg:text-2xl text-midtone ">
              HELLO!
            </h2>
            <p className="pt-4 pl-4 text-sm font-semibold tracking-wider font-body md:text-lg lg:text-xl text-midtone ">
              I AM A SELF-TAUGHT PROGRAMMER BASED IN CANADA. <br />
            </p>
            <p className="pt-4 pl-4 text-sm font-semibold tracking-wider font-body md:text-lg lg:text-xl text-midtone ">
              MY PASSION IS DESIGNING AND DEVELOPING CLEAN, CRISP, RESPONSIVE
              UIs.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="flex flex-row h-1/2">
        <div className="w-1/6 pt-24 bg-mybeige">
          <p className="text-base font-extrabold tracking-wider -rotate-90 md:text-lg lg:text-xl text-myorange font-headline ">
            SKILLS
          </p>
        </div>

        <div className="flex flex-col w-5/6 pr-12 md:pr-60 bg-mybeige">
          <FadeIn>
            <ul className="pt-2 pl-4 text-sm font-semibold tracking-wider font-body md:text-lg lg:text-xl text-midtone">
              <li className="pt-4 md:pt-6">HTML \ CSS \ JAVASCRIPT</li>
              <li className="pt-4 md:pt-6">REACT \ JSX</li>
              <li className="pt-4 md:pt-6">
                NEXT.JS \ TAILWIND CSS \ FRAMER-MOTION
              </li>
              <li className="pt-4 md:pt-6">NODE \ MONGO DB</li>
              <li className="pt-4 md:pt-6">GITHUB \ VS CODE \ CLI</li>
              <li className="pt-4 md:pt-6">AFFINITY PHOTO \ PROCREATE</li>
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
