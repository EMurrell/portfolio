import Link from "next/link";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="About" className="flex flex-col w-full h-screen bg-mybeige">
      <div className="flex flex-row h-1/2">
        <div className="w-1/6 pt-24 border-r-2 border-myblack">
          <p className="text-base font-extrabold tracking-wider -rotate-90 md:text-lg lg:text-xl text-myorange font-headline">
            BIO
          </p>
        </div>

        <div className="flex flex-col w-5/6 pr-12 md:pr-60">
          <FadeIn>
            <h2 className="pt-12 pb-2 pl-4 text-lg font-extrabold tracking-wider md:pt-28 font-headline md:text-2xl lg:text-3xl text-myorange ">
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
        <div className="w-1/6 pt-24 border-r-2 border-myblack">
          <p className="text-base font-extrabold tracking-wider -rotate-90 md:text-lg lg:text-xl text-myorange font-headline">
            SKILLS
          </p>
        </div>

        <div className="flex flex-col w-5/6 pr-12 md:pr-60">
          <FadeIn>
            <p className="pt-2 pl-4 text-sm font-semibold tracking-wider md:pt-8 font-body md:text-lg lg:text-xl text-midtone">
              HTML \ CSS \ JAVASCRIPT
            </p>
            <p className="pt-4 pl-4 text-sm font-semibold tracking-wider md:pt-6 font-body md:text-lg lg:text-xl text-midtone">
              REACT \ JSX
            </p>
            <p className="pt-4 pl-4 text-sm font-semibold tracking-wider md:pt-6 font-body md:text-lg lg:text-xl text-midtone">
              NEXT.JS \ TAILWIND CSS \ FRAMER-MOTION
            </p>
            <p className="pt-4 pl-4 text-sm font-semibold tracking-wider md:pt-6 font-body md:text-lg lg:text-xl text-midtone">
              NODE \ MONGO DB
            </p>
            <p className="pt-4 pl-4 text-sm font-semibold tracking-wider md:pt-6 font-body md:text-lg lg:text-xl text-midtone">
              GITHUB \ VS CODE \ CLI
            </p>
            <p className="pt-4 pl-4 text-sm font-semibold tracking-wider md:pt-6 font-body md:text-lg lg:text-xl text-midtone">
              AFFINITY PHOTO \ PROCREATE
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
