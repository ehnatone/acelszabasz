import ContactForm from "@/components/Contact/Contact";
import { JSX } from "react";

import ContactDetails from "@/components/Contact/ContactDetails";

export default function Contact(): JSX.Element {
  return (
    <section
      id="kapcsolat"
      className="mx-auto  2xs:pt-1 xs:pt-2 sm:pt-4 md:pt-6 lg:pt-10 bg-gray-200"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-700">Kapcsolat</h2>
        <p className="mt-4">Elérhetőségek és űrlap a kapcsolatfelvételhez.</p>
        <div className=" min-h-screen">
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
