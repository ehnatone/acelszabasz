"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-red-700 text-white fixed w-full h-24 drop-shadow-lg z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width="128"
              height="64"
              className="h-16 w-auto"
            />
          </Link>
          <h1 className="text-xl font-bold lg:block">Acélszabász.Hu</h1>
        </div>

        {/* Navigation Items */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/rolunk" className="hover:text-blue-300">
              Rólunk
            </Link>
          </li>
          <li>
            <Link href="/szolgaltatasok" className="hover:text-blue-300">
              Szolgáltatások
            </Link>
          </li>
          <li>
            <Link href="/galeria" className="hover:text-blue-300">
              Galéria
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
        <div className="absolute top-24 left-0 w-full bg-red-800 text-white md:hidden">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                href="/rolunk"
                className="block"
                onClick={() => setIsOpen(false)}
              >
                Rólunk
              </Link>
            </li>
            <li>
              <Link
                href="/szolgaltatasok"
                className="block"
                onClick={() => setIsOpen(false)}
              >
                Szolgáltatások
              </Link>
            </li>
            <li>
              <Link
                href="/galeria"
                className="block"
                onClick={() => setIsOpen(false)}
              >
                Galéria
              </Link>
            </li>
            <li>
              <Link
                href="/kapcsolat"
                className="block"
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
