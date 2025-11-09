"use client";
import { JSX, useState } from "react";
import ContactForm from "./Contact/Contact";

export default function ContactButton(): JSX.Element {
  const [popupOpen, setPopupOpen] = useState(false);

  const handleClick = () => {
    setPopupOpen(!popupOpen);
  };

  return (
    <div className="contact my-8 flex flex-col items-center justify-center w-full">
      {popupOpen && <ContactForm title="Ajánlatkérés" onClose={handleClick} />}

      {!popupOpen && (
        <button
          onClick={handleClick}
          className="bg-red-800 text-white font-semibold px-6 py-3 rounded-2xl shadow hover:bg-red-700 transition"
        >
          Ajánlatkérés itt!
        </button>
      )}
    </div>
  );
}