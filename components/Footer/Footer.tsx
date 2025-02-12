import Image from "next/image";

import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
interface FooterProps {
  children: ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  return (
    <footer className="flex fixed bottom-0 w-full flex-col gap-4 items-center justify-center py-4 text-sm text-center text-gray-500 dark:text-gray-400 bg-slate-200">
      <div className="flex gap-2">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/jogi-nyilatkozat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Adatvédelem
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.facebook.com/profile.php?id=61564573509600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} className="fa-fw" />
          Facebook →
        </a>
      </div>
      <div className="flex-col gap-4">{children}</div>
    </footer>
  );
};

export default Footer;
