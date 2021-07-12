import FadeIn from "../components/FadeIn.js";

export default function Main1() {
  return (
    <section className="flex flex-row">
      <main className="flex flex-col items-end justify-center w-5/6 h-screen bg-myblack ">
        <h2 className="flex pt-40 pl-4 pr-1 text-xl font-extrabold text-midtone md:text-4xl font-headline lg:text-5xl animate-fade-in-down">
          MY NAME
        </h2>

        <h2 className="flex pl-4 pr-1 text-xl font-extrabold text-midtone md:text-4xl font-headline lg:text-5xl animate-fade-in-down">
          IS
        </h2>
        <h1 className="flex pl-4 pr-1 text-xl font-extrabold md:text-4xl lg:text-5xl font-headline animate-fade-in-down text-mybeige">
          ERIC
        </h1>
        <h1 className="flex pl-4 pr-1 text-xl font-extrabold md:text-4xl lg:text-5xl font-headline animate-fade-in-down text-mybeige">
          MURRELL
        </h1>
        <h2 className="flex pl-4 pr-1 text-xl font-extrabold md:text-4xl font-headline lg:text-5xl animate-fade-in-down text-midtone">
          I AM A
        </h2>
        <h2 className="flex pl-4 pr-1 text-xl font-extrabold md:text-4xl font-headline lg:text-5xl animate-fade-in-down text-midtone">
          FULL STACK
        </h2>
        <h1 className="flex pl-4 pr-1 text-xl font-extrabold md:text-4xl font-headline lg:text-5xl animate-fade-in-down text-mybeige">
          WEB
        </h1>
        <h1 className="flex pl-4 pr-1 text-xl font-extrabold md:text-4xl font-headline lg:text-5xl animate-fade-in-down text-mybeige">
          DEVELOPER
        </h1>
      </main>

      <div className="w-1/6 h-screen bg-mybeige">
        {/* <ul className="text-sm text-myblack font-headline">
          <li>about</li>
          <li>work</li>
          <li>contact</li>
        </ul> */}
      </div>
    </section>
  );
}
