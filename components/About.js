import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section
      id="About"
      className="flex flex-row h-screen pt-24 min-full bg-mybeige"
    >
      <div className="flex flex-col items-end justify-center w-2/5 bg-mybeige"></div>

      <div className="w-3/5 border-4 border-solid border-mybeige h-3/5 bg-myblack">
        <h2 className="flex pt-40 pl-4 pr-1 text-lg text-mybeige md:text-2xl font-headline lg:text-4xl animate-fade-in-right">
          My Name
        </h2>
      </div>
    </section>
  );
}
