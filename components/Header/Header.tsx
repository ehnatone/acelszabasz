"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-red-700 text-white fixed w-full h-24 drop-shadow-lg z-50">
      <nav className="container mx-auto flex justify-between h-24 px-4">
        {/* Logo and Title */}

        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width="192"
            height="128"
            className="h-32 w-48 z-50"
          />
        </Link>

        <div className="flex items-center">
          <h1 className="hidden sm:flex space-x-6 text-lg md:text-xl  font-bold ">
            Acélszabász.Hu
          </h1>
        </div>
        {/* Navigation Items */}
        <ul className="hidden md:flex items-center space-x-6 px-4">
          <li>
            <Link href="/rolam" className="hover:text-blue-300">
              Rólam
            </Link>
          </li>
          <li>
            <Link href="/szolgaltatasok" className="hover:text-blue-300">
              Szolgáltatások
            </Link>
          </li>
          <li>
            <Link
              href="/galeria-szolgaltatasok"
              className="hover:text-blue-300"
            >
              Munkáim
            </Link>
          </li>
          <li>
            <Link href="/kapcsolat" className="hover:text-blue-300">
              Kapcsolat
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="nav absolute top-24 left-0 w-full bg-red-700 text-white md:hidden z-10  flex flex-col">
          <ul className="flex flex-grow flex-col">
            <li className="border-b border-white hover:bg-red-900">
              <Link
                href="/rolam"
                className="block text-center py-6"
                onClick={() => setIsOpen(false)}
              >
                Rólam
              </Link>
            </li>
            <li className="border-b border-white hover:bg-red-900">
              <Link
                href="/szolgaltatasok"
                className="block text-center py-6"
                onClick={() => setIsOpen(false)}
              >
                Szolgáltatások
              </Link>
            </li>
            <li className="border-b border-white hover:bg-red-900">
              <Link
                href="/galeria"
                className="block text-center py-6"
                onClick={() => setIsOpen(false)}
              >
                Galéria
              </Link>
            </li>
            <li className="border-b border-white hover:bg-red-900">
              <Link
                href="/galeria-szolgaltatasok"
                className="block text-center py-6"
                onClick={() => setIsOpen(false)}
              >
                Galéria szolgáltatásonként
              </Link>
            </li>
            <li className="hover:bg-red-900">
              <Link
                href="/kapcsolat"
                className="block text-center py-6"
                onClick={() => setIsOpen(false)}
              >
                Kapcsolat
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
