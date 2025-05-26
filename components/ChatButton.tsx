"use client";
import { JSX, useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import ContactForm from "./Contact/Contact";

export default function ChatButton(): JSX.Element {
  const [popupOpen, setPopupOpen] = useState(false);

  const handleChatClick = () => {
    // Open chat window

    setPopupOpen(!popupOpen);

  };

  return (
    <div className="absolute bottom-0 m-0 p-4 w-full flex justify-end">
      {popupOpen && <ContactForm onClose={handleChatClick}></ContactForm>}

      {!popupOpen && (
        <FaEnvelope
          className="rounded bg-red-800 text-white cursor-pointer"
          style={{ width: "40px", height: "34px", padding: "0px" }}
          onClick={handleChatClick}
        />
      )}
    </div>
  );
}
