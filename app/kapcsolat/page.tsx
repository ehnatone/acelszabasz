import ContactForm from "@/components/Contact/Contact";
import { JSX } from "react";

import ContactDetails from "@/components/Contact/ContactDetails";

export default function Contact(): JSX.Element {
  return (
    <section
      id="kapcsolat"
      className="relative min-h-[calc(100vh-8rem)] flex items-center "
    >
      <div className="container max-h-[calc(100vh-8rem)] mx-auto overflow-y-auto scroll-smooth text-center">
        <h2 className="text-3xl font-bold text-red-700">Kapcsolat</h2>
        <div className="min-h-screen">
          <div className="mt-4 flex-grow">
            <ContactDetails />
          </div>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
