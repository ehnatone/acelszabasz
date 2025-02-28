"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 flex flex-col items-center text-center">
      <p className="text-sm mb-4">
        Ez a weboldal sütiket használ a biztonságos böngészés, a legjobb
        felhasználói élmény és statisztikai célok érdekében. A további
        használattal Ön elfogadja ezt.
      </p>
      <div className="flex gap-4">
        <Link
          href="/jogi-nyilatkozat"
          className="bg-red-800 text-white px-4 py-2 rounded hover:bg-red-900"
        >
          Bővebben
        </Link>
        <button
          onClick={acceptCookies}
          className="bg-red-800 text-white px-4 py-2 rounded hover:bg-red-900"
        >
          Elfogadom
        </button>
      </div>
    </div>
  );
}
