import ContactForm from "@/components/Contact/Contact";
import { JSX } from "react";

export default function Contact(): JSX.Element {
  return (
    <section id="kapcsolat" className="container mx-auto py-20 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-700">Kapcsolat</h2>
        <p className="mt-4">Elérhetőségek és űrlap a kapcsolatfelvételhez.</p>

        <ContactForm />
      </div>
    </section>
  );
}
