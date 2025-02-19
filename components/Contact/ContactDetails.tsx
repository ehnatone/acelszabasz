"use client"; // Ensure this runs only on the client

import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

import MapComponent from "./MapComponent";

const ContactDetails = () => {
  const position = { lat: 47.31257, lng: 18.412163 }; //47.312570/18.412163
  return (
    <div className=" bg-white shadow-lg rounded-2xl p-6 mx-auto">
      <h2 className="text-xl font-bold mb-4">Elérhetőség</h2>
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <FaPhone className="w-5 h-5 text-slate-600" />
          <span className="text-gray-700">+36 70 583 4843</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaEnvelope className="w-5 h-5 text-slate-600" />
          <span className="text-gray-700">info@acelszabasz.hu</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaGlobe className="w-5 h-5 text-slate-600" />
          <a
            href="https://www.acelszabasz.hu"
            className="text-blue-600 hover:underline"
          >
            www.acelszabasz.hu
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <FaMapMarkerAlt className="w-5 h-5 text-red-500" />
          <span className="text-gray-700">Belmajor 12, Zámoly, Hungary</span>
        </div>
      </div>
      <div className="mt-4 h-96 rounded-lg overflow-hidden">
        <MapComponent center={position} zoom={13} />
      </div>
    </div>
  );
};

export default ContactDetails;
