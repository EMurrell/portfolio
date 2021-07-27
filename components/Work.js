import Link from "next/link";
import FadeIn from "./FadeIn";

export default function Work() {
  return (
    <section id="Work" className="flex flex-col w-full bg-myblack">
      <div className="flex flex-row ">
        <div className="flex flex-col justify-center w-5/6 border-r-2 border-mybeige">
          <FadeIn>
            <div className="flex flex-col py-4 lg:flex-row">
              <div className="flex justify-center pl-4 lg:pl-24">
                <a href="/ptp">
                  <img
                    src="ptp-thumb2.png"
                    alt="ptp case study"
                    height={700}
                    width={700}
                  />
                </a>
              </div>
              <div className="flex flex-col justify-center text-center lg:text-left">
                <h1 className="py-2 pl-4 text-sm font-extrabold md:text-base text-mybeige font-headline">
                  PUP TO PAL <br />
                </h1>
                <Link href="/ptp">
                  <a className="pb-6 pl-4 text-sm font-semibold tracking-wide underline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-body text-myorange hover:text-myblue">
                    VIEW CASE STUDY
                  </a>
                </Link>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-col py-4 lg:flex-row">
              <div className="flex justify-center pl-4 lg:pl-24">
                <a href="/mtc">
                  <img
                    src="mtc-thumb2.png"
                    alt="mtc case study"
                    height={700}
                    width={700}
                  />
                </a>
              </div>
              <div className="flex flex-col justify-center text-center lg:text-left ">
                <h1 className="py-2 pl-4 text-sm font-extrabold md:text-base text-mybeige font-headline">
                  MASON'S <br />
                  TOUCH <br />
                </h1>
                <Link href="/mtc">
                  <a className="pb-6 pl-4 text-sm font-semibold tracking-wide underline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-body text-myorange hover:text-myblue">
                    VIEW CASE STUDY
                  </a>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="w-1/6 pt-64 pr-4 ">
          <p className="text-base font-extrabold tracking-wider rotate-90 md:text-lg lg:text-xl text-myorange font-headline">
            WORKS
          </p>
        </div>
      </div>
    </section>
  );
}
