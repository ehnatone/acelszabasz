import { JSX } from "react";

export default function AboutPage(): JSX.Element {
  return (
    <div className="snap-always snap-center">
      <section
        id="rolam"
        className="relative min-h-[calc(100vh-6rem)] flex items-center"
      >
        <div className="container mx-auto text-center">
          {/* Background Image with Dark Overlay */}

          {/* Content */}

          <div className="relative z-10 container mx-auto p-8 text-white text-center bg-transparent bg-slate-500">
            <h2 className="text-4xl font-bold py-10">Rólam</h2>
            <p className="lg:text-lg text-md mb-4">
              Vállalkozásom több mint 10 éve foglalkozik úszókapuk, kerítések,
              lépcsők, korlátok és egyéb egyedi lakatos szerkezetek gyártásával.
              Az évek során folyamatosan fejlesztettem magamat és eszközeimet,
              hogy ügyfeleim számára a legjobb minőséget biztosíthassam.
            </p>
            <p className="lg:text-lg text-md  mb-4">
              Székesfehérvár mellett, Zámolyon található műhelyem, és körülbelül
              100 km-es körzetben vállalok megbízásokat. Ügyfeleim könnyen
              elérhetnek engem telefonon és e-mailben. Kiemelten figyelek a
              tiszta, egyértelmű kommunikációra.
            </p>
            <p className="lg:text-lg text-md  mb-4">
              Több száz sikeresen elkészült projekt és számtalan elégedett
              ügyfél igazolja szakértelmemet. Referenciamunkáimról a galériában
              számos kép található. Ha tartós és igényes megoldást keres,
              forduljon hozzám bizalommal!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
