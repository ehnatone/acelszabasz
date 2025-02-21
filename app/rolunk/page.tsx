import { JSX } from "react";

export default function AboutPage(): JSX.Element {
  return (
    <div className="snap-always snap-center">
      <section
        id="rolunk"
        className="relative min-h-[calc(100vh-8rem)] flex items-center"
      >
        <div className="container max-h-[calc(100vh-8rem)] mx-auto overflow-y-auto scroll-smooth text-center">
          {/* Background Image with Dark Overlay */}

          {/* Content */}

          <div className="relative z-10 container mx-auto p-8 text-white text-center bg-transparent bg-slate-500">
            <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold py-10">
              Rólunk
            </h2>
            <p className="lg:text-lg text-md my-8">
              Vállalkozásunk több mint 10 éve foglalkozik úszókapuk, kerítések,
              lépcsők, korlátok és egyéb egyedi lakatos szerkezetek gyártásával.
              Az évek során folyamatosan fejlesztettük technológiánkat és
              bővítettük szolgáltatásainkat, hogy ügyfeleink számára a legjobb
              minőséget biztosítsuk.
            </p>
            <p className="lg:text-lg text-md  my-8">
              Székesfehérvár mellett, Zámolyon működünk, és körülbelül 100 km-es
              körzetben vállalunk megbízásokat. Ügyfeleink könnyen elérhetnek
              minket telefonon és e-mailben, és kiemelten figyelünk a tiszta,
              egyértelmű kommunikációra.
            </p>
            <p className="lg:text-lg text-md  my-8">
              Több száz sikeresen elkészült projekt és számtalan elégedett
              ügyfél igazolja szakértelmünket. Referenciamunkáinkról a
              galériában számos kép található. Ha tartós és igényes megoldást
              keres, forduljon hozzánk bizalommal!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
