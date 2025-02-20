"use client";

import { useRef, useState } from "react";
import { Turnstile } from "next-turnstile";

export default function ContactForm() {
  const [turnstileStatus, setTurnstileStatus] = useState<
    "success" | "error" | "expired" | "required"
  >("required");
  const [error, setError] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefon: "",
    message: "",
    token: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("Küldés...");

    if (!formRef.current) {
      setIsLoading(false);
      return;
    }

    const formDataFinal = new FormData(formRef.current);
    const token = formDataFinal.get("cf-turnstile-response");
    const email = formDataFinal.get("email");
    const name = formDataFinal.get("name");
    const telefon = formDataFinal.get("telefon");
    const message = formDataFinal.get("message");

    try {
      const response = await fetch("/api/kapcsolat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, telefon, message, token }),
      });
      const result = await response.json();
      setIsLoading(false);
      if (response.ok) {
        setStatus("Üzenet sikeresen elküldve! ✅");
        setFormData({
          name: "",
          email: "",
          telefon: "",
          message: "",
          token: "",
        });
        if (window.turnstile && typeof window.turnstile.reset == "function") {
          window.turnstile.reset("#turnstile-widget");
        }
      } else {
        setStatus(
          result.error ||
            "Hiba történt. Kérlek frissítd az oldalt és próbáld újra."
        );
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Hiba történt. Kérlek frissítd az oldalt és próbáld újra.");
      setIsLoading(false);
      if (window.turnstile && typeof window.turnstile.reset == "function") {
        window.turnstile.reset("#turnstile-widget");
      }
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-white  rounded-lg shadow-md p-6 mx-auto"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Kapcsolat</h2>
      {status && <p className="text-center mb-2 text-red-500">{status}</p>}
      <input
        type="text"
        name="name"
        placeholder="Név - Kötelező"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
        required
      />
      <input
        type="tel"
        name="telefon"
        placeholder="Telefon - Kötelező, ha nincs email"
        value={formData.telefon}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
        required={!formData.email}
      />
      <input
        type="email"
        name="email"
        placeholder="Email - Kötelező, ha nincs telefonszám"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
        required={!formData.telefon}
      />{" "}
      <textarea
        name="message"
        placeholder="Üzenet - Kötelező"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
        required
      ></textarea>
      {/* Cloudflare Turnstile CAPTCHA */}
      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        retry="auto"
        refreshExpired="auto"
        onError={() => {
          setTurnstileStatus("error");
          setError("Security check failed. Please try again.");
          console.log(turnstileStatus + "#" + error);
        }}
        onExpire={() => {
          setTurnstileStatus("expired");
          setError("Security check expired. Please verify again.");
          console.log(turnstileStatus + "#" + error);
        }}
        onLoad={() => {
          setTurnstileStatus("required");
          setError(null);
          console.log(turnstileStatus + "#" + error);
        }}
        onVerify={
          (/*token*/) => {
            setTurnstileStatus("success");
            console.log(turnstileStatus + "#" + error);
            setError(null);
          }
        }
      />
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-red-700 text-white p-2 rounded"
      >
        Küldés
      </button>
    </form>
  );
}
