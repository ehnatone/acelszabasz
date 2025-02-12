"use client";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-red-700 text-white fixed w-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)] z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/">
          <h1 className="text-2xl font-bold sr-only">Acélszabász.Hu</h1>
          <Image
            aria-hidden
            src="/logo.png"
            alt="Logo"
            width={200}
            height={100}
          ></Image>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="rolunk" className="hover:text-blue-300">
              Rólunk
            </Link>
          </li>
          <li>
            <Link href="#szolgaltatasok" className="hover:text-blue-300">
              Szolgáltatások
            </Link>
          </li>
          <li>
            <Link href="#galeria" className="hover:text-blue-300">
              Galéria
            </Link>
          </li>
          <li>
            <Link href="#kapcsolat" className="hover:text-blue-300">
              Kapcsolat
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
