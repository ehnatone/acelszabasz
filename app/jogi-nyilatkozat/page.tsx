import { JSX } from "react";

export default function LegalNoticePage(): JSX.Element {
  return (
    <div className="snap-always snap-center">
      <section
        id="jogi-nyilatkozat"
        className="relative min-h-[calc(100vh-6rem)] flex items-center"
      >
        <div className="container mx-auto text-center">
          {/* Background Image with Dark Overlay */}

          {/* Content */}

          <div className="relative z-10 container mx-auto p-8 text-white text-center bg-transparent bg-slate-500">
            <h2 className="text-4xl font-bold py-4 md:py-7 lg:py-10">
              Jogi Nyilatkozat
            </h2>
            <p className="lg:text-lg text-md mb-4">
              A jelen weboldalon található információk kizárólag tájékoztató
              jellegűek, és nem minősülnek jogi tanácsadásnak. A weboldal
              tulajdonosa mindent megtesz annak érdekében, hogy az információk
              pontosak és naprakészek legyenek, de nem vállal felelősséget azok
              teljességéért vagy helyességéért.
            </p>
            <p className="lg:text-lg text-md mb-4">
              A weboldal használata során keletkező esetleges károkért a
              tulajdonos nem vállal felelősséget. A felhasználók saját
              felelősségükre veszik igénybe az oldalon található információkat.
            </p>
            <p className="lg:text-lg text-md mb-4">
              A weboldal tartalmának bármilyen felhasználása, másolása vagy
              terjesztése kizárólag a tulajdonos előzetes írásbeli engedélyével
              lehetséges. Minden jog fenntartva.
            </p>

            <h2 className="text-4xl font-bold py-4 md:py-7 lg:py-10">
              Adatkezelési Tájékoztató
            </h2>
            <p className="lg:text-lg text-md mb-4">
              A weboldal üzemeltetője elkötelezett a személyes adatok védelme
              iránt. Az adatkezelés kizárólag jogszerű, tisztességes és
              átlátható módon történik, a hatályos adatvédelmi jogszabályoknak
              megfelelően.
            </p>
            <p className="lg:text-lg text-md mb-4">
              A felhasználók személyes adatait csak a szükséges mértékben és
              időtartamban tároljuk, harmadik fél részére nem adjuk át, kivéve
              jogszabályi kötelezettség esetén.
            </p>

            <h2 className="text-4xl font-bold py-4 md:py-7 lg:py-10">
              Cookie Policy
            </h2>
            <p className="lg:text-lg text-md mb-4">
              A weboldal sütiket (cookie-kat) használ a felhasználói élmény
              javítása érdekében. A sütik segítenek az oldal megfelelő
              működésében, valamint anonim statisztikák készítésében.
            </p>
            <p className="lg:text-lg text-md mb-4">
              A felhasználók lehetősége van a sütik kezelésére vagy letiltására
              a böngésző beállításaiban. A sütik letiltása esetén egyes funkciók
              nem biztos, hogy megfelelően működnek.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
