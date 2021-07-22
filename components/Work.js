import Link from "next/link";

export default function Work() {
  return (
    <section id="Work" className="flex flex-col w-full h-screen bg-myblack">
      <div className="flex flex-row ">
        <div className="flex flex-col justify-center w-5/6 h-screen border-r-2 border-mybeige">
          <div className="flex flex-col py-4 lg:flex-row">
            <div className="px-4 lg:pl-24">
              <img
                src="ptp-thumb.png"
                alt="ptp case study"
                height={500}
                width={500}
              />
            </div>
            <div className="flex flex-col justify-center px-16 py-4">
              <h1 className="self-center p-4 text-sm font-extrabold text-center md:text-base text-mybeige font-headline">
                PUP TO PAL <br />
                DOG TRAINING
              </h1>
              <Link href="/ptp">
                <a className="self-center text-sm font-extrabold tracking-wide transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-body text-myorange hover:text-myblue">
                  VIEW CASE STUDY
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col py-4 lg:flex-row">
            <div className="px-4 lg:pl-24">
              <img
                src="mtc-thumb.png"
                alt="mtc case study"
                height={500}
                width={500}
              />
            </div>
            <div className="flex flex-col justify-center px-16 ">
              <h1 className="self-center p-4 text-sm font-extrabold text-center md:text-base text-mybeige font-headline">
                MASON'S TOUCH <br />
                CONSTRUCTION
              </h1>
              <Link href="/mtc">
                <a className="self-center text-sm font-extrabold tracking-wide transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-body text-myorange hover:text-myblue">
                  VIEW CASE STUDY
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-1/6 h-screen pt-64 pr-4 ">
          <p className="text-base font-extrabold tracking-wider rotate-90 md:text-lg lg:text-xl text-myorange font-headline">
            WORKS
          </p>
        </div>
      </div>
    </section>
  );
}
