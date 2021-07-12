import Link from "next/link";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="flex items-center justify-center w-full h-24 bg-myblack">
      <h3 className="text-xs text-center text-mybeige font-headline">
        © {getCurrentYear()} EMurrell
        <br />
        All Rights Reserved
      </h3>
    </footer>
  );
}
