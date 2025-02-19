"use client";
import { useEffect, useRef, useState } from "react";

// Declare turnstile globally so TypeScript recognizes it
declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: { sitekey: string; callback: (token: string) => void }
      ) => void;
    };
  }
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefon: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [token, setToken] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);

  // Define the Turnstile site key explicitly as a string
  const SITE_KEY = "0x4AAAAAAA8fVeyE1HXxgO_8"; // Replace with your actual key

  useEffect(() => {
    console.log("useeffect ran");
    if (
      typeof window !== "undefined" &&
      window.document &&
      turnstileRef.current
    ) {
      console.log("rendering turnstile");
      console.log("window.turnstile", window.turnstile);
      window.turnstile?.render(turnstileRef.current, {
        sitekey: SITE_KEY,
        callback: (token: string) => setToken(token),
      });
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Küldés...");

    try {
      const response = await fetch("/api/kapcsolat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, token }),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Sikeresen elküldve! ✅");
        setFormData({ name: "", email: "", telefon: "", message: "" });
      } else {
        setStatus(result.error || "Hiba történt.");
      }
    } catch {
      setStatus("Hiba történt.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white  rounded-lg shadow-md p-6 mx-auto"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Kapcsolat</h2>
      {status && <p className="text-center mb-2 text-red-500">{status}</p>}
      <input
        type="text"
        name="name"
        placeholder="Név"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
        required
      />{" "}
      <input
        type="telefon"
        name="telefon"
        placeholder="Telefon"
        value={formData.telefon}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
        required
      />
      <textarea
        name="message"
        placeholder="Üzenet"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
        required
      ></textarea>
      {/* Cloudflare Turnstile CAPTCHA */}
      <div
        ref={turnstileRef}
        className="cf-turnstile"
        data-sitekey={SITE_KEY}
      ></div>
      <button
        type="submit"
        className="w-full bg-red-700 text-white p-2 rounded"
      >
        Küldés
      </button>
    </form>
  );
}
