"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Küldés...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Sikeresen elküldve! ✅");
        setFormData({ name: "", email: "", message: "" });
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
      className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto"
    >
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
      />
      <textarea
        name="message"
        placeholder="Üzenet"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
        required
      ></textarea>
      <button
        type="submit"
        className="w-full bg-red-700 text-white p-2 rounded"
      >
        Küldés
      </button>
    </form>
  );
}
