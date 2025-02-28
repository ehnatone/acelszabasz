"use client"; // Ensure this runs only on the client

import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

import MapComponent from "./MapComponent";
import Link from "next/link";

const ContactDetails = () => {
  const position = { lat: 47.31257, lng: 18.412163 }; //47.312570/18.412163
  return (
    <div className=" bg-white shadow-lg p-6 mx-auto">
      <h2 className="text-xl font-bold mb-4">Elérhetőség</h2>
      <div className="space-y-3">
        <Link
          className="flex items-center space-x-3 hover:underline"
          href="tel:+36 (06) 30 554 5381"
        >
          <FaPhone className="w-5 h-5 text-slate-600" />
          <span className="text-gray-700">+36 (06) 30 554 5381</span>
        </Link>

        <Link
          className="flex items-center space-x-3 hover:underline"
          href="mailto:info@acelszabasz.hu"
        >
          <FaEnvelope className="w-5 h-5 text-slate-600" />
          <span className="text-gray-700">info@acelszabasz.hu</span>
        </Link>

        <Link
          href="https://www.acelszabasz.hu"
          className="flex items-center space-x-3 hover:underline"
        >
          <FaGlobe className="w-5 h-5 text-slate-600" />
          <span className="text-gray-700">www.acelszabasz.hu</span>
        </Link>
        <Link
          href="https://goo.gl/maps/cJAJjEDSnPPaXtKK6"
          className="flex items-center space-x-3 hover:underline"
        >
          <FaMapMarkerAlt className="w-5 h-5 text-red-500" />
          <span className="text-gray-700">8081 Zámoly, Belmajor 12</span>
        </Link>
      </div>
      <div className="mt-4 h-96 rounded-lg overflow-hidden">
        <MapComponent center={position} zoom={13} />
      </div>
    </div>
  );
};

export default ContactDetails;
