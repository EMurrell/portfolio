import Link from "next/link";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="flex items-center justify-center w-full h-28 botton-0 bg-myblack">
      <a
        href="/#"
        className="text-xs text-center text-mybeige font-headline hover:text-myorange"
      >
        © {getCurrentYear()} EMurrell.com
        <br />
      </a>
    </footer>
  );
}
