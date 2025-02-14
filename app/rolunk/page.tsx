import { JSX } from "react";

export default function About(): JSX.Element {
  return (
    <section id="rolunk" className="container mx-auto p-4">
      <h2 className="text-4xl font-bold text-center pt-8 my-8">Rólunk</h2>
      <p className="text-lg text-center my-8">
        Vállalkozásunk több mint 10 éve foglalkozik úszókapuk, kerítések,
        lépcsők, korlátok és egyéb egyedi lakatos szerkezetek gyártásával. Az
        évek során folyamatosan fejlesztettük technológiánkat és bővítettük
        szolgáltatásainkat, hogy ügyfeleink számára a legjobb minőséget
        biztosítsuk. Elsősorban magánszemélyeknek kínálunk tartós, esztétikus és
        egyedi fémszerkezeteket.
      </p>
      <p className="text-lg text-center my-8">
        Székesfehérvár mellett, Zámolyon működünk, és körülbelül 100 km-es
        körzetben vállalunk megbízásokat. Ügyfeleink könnyen elérhetnek minket
        telefonon és e-mailben, és kiemelten figyelünk a tiszta, egyértelmű
        kommunikációra, valamint a folyamatos kapcsolattartásra. Minden munkát
        precízen és megbízhatóan végzünk, az ügyfél igényeihez igazodva.
      </p>
      <p className="text-lg text-center my-8">
        Több száz sikeresen elkészült projekt és számtalan elégedett ügyfél
        igazolja szakértelmünket. Versenyelőnyünk a minőségi anyaghasználat, a
        pontos kivitelezés és az ügyfélközpontú hozzáállás.
        Referenciamunkáinkról a galériában számos kép található. Ha tartós és
        igényes megoldást keres, forduljon hozzánk bizalommal!
      </p>
    </section>
  );
}
