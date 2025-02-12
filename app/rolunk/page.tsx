import { JSX } from "react";

export default function About(): JSX.Element {
  return (
    <section id="rolunk" className="container mx-auto p-4">
      <h2 className="text-4xl font-bold text-center pt-8 my-8">Rólunk</h2>
      <p className="text-lg text-center my-8">
        Cégünk 10 éve foglalkozik úszókapuk, kerítések és egyedi lakatos
        szerkezetek gyártásával, valamint lépcsők és korlátok készítésével
        minőségi anyagokból. Székesfehérvár mellett, Zámolyon működünk, és 100
        km-es körzetben vállalunk munkákat. Számtalan elégedett ügyfél és több
        száz sikeresen elkészült projekt bizonyítja szakértelmünket és
        megbízhatóságunkat. Ha precíz kivitelezést és tartós megoldásokat keres,
        forduljon hozzánk bizalommal!
      </p>
    </section>
  );
}
