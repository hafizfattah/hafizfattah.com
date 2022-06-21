import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full top-0 left-0 flex flex-row justify-between items-center p-4 border-hfg-black border-b text-2xl h-[50px] z-20 bg-hfg-white">
      <Link href="/">CODER FOR HIRE</Link>
      <Link href="#">BLOG</Link>
    </header>
  );
}