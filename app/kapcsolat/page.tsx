import ContactForm from "@/components/Contact/Contact";
import { JSX } from "react";

import ContactDetails from "@/components/Contact/ContactDetails";

export default function Contact(): JSX.Element {
  return (
    <section
      id="kapcsolat"
      className="relative min-h-[calc(100vh-6rem)] flex items-center bg-gray-100"
    >
      <div className="container mx-auto text-center">
        <ContactDetails />
        <ContactForm />
      </div>
    </section>
  );
}
