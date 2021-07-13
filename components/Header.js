import FadeIn from "./FadeIn";
import Nav from "../components/Nav";

export default function Main1() {
  return (
    <>
      <Nav />
      <section id="Home" className="flex flex-row w-full h-screen -mt-14 ">
        <main className="flex flex-col items-end justify-center w-5/6 border-4 border-solid bg-myblack border-mybeige">
          <h2 className="flex pt-40 pl-4 pr-1 text-xl font-extrabold text-midtone md:text-4xl font-headline lg:text-6xl animate-fade-in-right">
            MY NAME
          </h2>

          <h2 className="flex pl-4 pr-2 text-xl font-extrabold text-midtone md:text-4xl font-headline lg:text-6xl animate-fade-in-right">
            IS
          </h2>
          <h1 className="flex pl-4 pr-2 text-xl font-extrabold md:text-4xl lg:text-6xl font-headline animate-fade-in-left text-mybeige">
            ERIC
          </h1>
          <h1 className="flex pl-4 pr-2 text-xl font-extrabold md:text-4xl lg:text-6xl font-headline animate-fade-in-left text-mybeige">
            MURRELL
          </h1>
          <h2 className="flex pl-4 pr-2 text-xl font-extrabold md:text-4xl font-headline lg:text-6xl animate-fade-in-right text-midtone">
            I AM A
          </h2>
          <h2 className="flex pl-4 pr-2 text-xl font-extrabold md:text-4xl font-headline lg:text-6xl animate-fade-in-right text-midtone">
            FULL STACK
          </h2>
          <h1 className="flex pl-4 pr-2 text-xl font-extrabold md:text-4xl font-headline lg:text-6xl animate-fade-in-left text-mybeige">
            WEB
          </h1>
          <h1 className="flex pl-4 pr-2 text-xl font-extrabold md:text-4xl font-headline lg:text-6xl animate-fade-in-left text-mybeige">
            DEVELOPER
          </h1>
        </main>

        <div className="w-1/6 bg-mybeige"></div>
      </section>
    </>
  );
}
