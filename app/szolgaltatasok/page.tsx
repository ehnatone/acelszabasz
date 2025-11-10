import Image from "next/image";

const services = [
  {
    title: "Úszókapuk",
    description:
      "Úszókapuim modern és praktikus megoldást kínálnak, különösen ott, ahol a helytakarékosság és a könnyű kezelhetőség fontos. Mivel nem igényelnek talajsínt, egyenetlen vagy havas felületeken is problémamentesen működnek. Minőségi alapanyagokkal és precíz technológiával dolgozom, hogy a kapuk tartósak, esztétikusak és könnyen karbantarthatók legyenek. Egyedi méretben, modern vagy klasszikus kialakítással készítem őket, igazodva az ügyfelek igényeihez.",
    image: "/1.jpg",
  },
  {
    title: "Kerítések",
    description:
      "Egy jól megtervezett kerítés nemcsak biztonságot nyújt, hanem az ingatlan megjelenését is meghatározza. Különféle kerítések gyártását és telepítését vállalom, legyen szó kovácsoltvas, modern fém vagy fa-fém kombinációkról. Fontos számomra, hogy a kerítések időtállóak, időjárásállóak és minimális karbantartást igényeljenek. Személyre szabott tervezéssel biztosítom, hogy tökéletesen illeszkedjenek az ingatlanhoz és az egyedi igényekhez.",
    image: "/2.jpg",
  },
  {
    title: "Lépcsők",
    description:
      "A lépcsők nemcsak funkcionálisak, hanem az épület stílusát is meghatározzák. Beltéri és kültéri lépcsők gyártását vállalom, az ügyfél igényeihez igazodva. Legyen szó modern, letisztult vagy díszes kivitelről, a lépcsők strapabíróak, biztonságosak és esztétikusak. Kiemelt figyelmet fordítok a pontos méretezésre és a kényelmes, stabil használatra, hogy hosszú éveken át megbízhatóan szolgáljanak.",
    image: "/3.jpg",
  },
  {
    title: "Korlátok",
    description:
      "A korlátok egyik legfontosabb funkciója a biztonság, de emellett meghatározó dizájnelemei is lehetnek egy épületnek. Egyedi fémszerkezetű acél vagy kovácsoltvas korlátok gyártását és telepítését is vállaljuk. Legyen szó beltéri vagy kültéri megoldásokról, minden esetben figyelünk a precíz kivitelezésre, az időjárásállóságra és az esztétikai megjelenésre. Egyedi tervezésünknek köszönhetően modern vagy klasszikus stílusban is elkészítjük a korlátokat, így azok tökéletesen illeszkednek a lépcsőhöz, erkélyhez vagy teraszhoz.",
    image: "/4.jpg",
  },
  {
    title: "Tárolók és Garázsok",
    description:
      "Tárolók, garázsok és kennelek gyártásával és telepítésével foglalkozom, egyedi igényekre szabva. Legyen szó kisállata biztonságos elhelyezéséről, járműve védelméről vagy kerti szerszámok tárolásáról, tartós és esztétikus megoldásokat kínálok. Precíz kivitelezéssel és minőségi anyagokkal dolgozom, biztosítva a hosszú távú megbízhatóságot.",
    image: "/5.jpg",
  },
  {
    title: "Egyéb egyedi acél szerkezetek",
    description:
      "Vállalkozásom egyedi méretre gyártott acélszerkezetek gyártásával és telepítésével foglalkozik, teljes mértékben igazodva az Ön igényeihez és a környezet adottságaihoz. Legyen szó terasz- és előtetőkről, árnyékolókról, pergolákról vagy bármilyen egyedi szerkezetről, vállalom a kivitelezést. Emellett különféle szerkezetek, állványok és tartók készítését is el tudom végezni.",
    image: "/6.jpg",
  },
];

export default function ServicesPage() {
  return (
    <section
      id="szolgaltatasok"
      className="relative min-h-[calc(100vh-6rem)] flex items-center bg-gray-100"
    >
      <div className="container max-h-[calc(100vh-6rem)] overflow-y-auto scroll-smooth mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-700 py-10">
          Szolgáltatások
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          Professzionális acélszerkezet-gyártás és telepítés egy helyen.
        </p>

        {/* Service Grid */}
        <div className="grid xl:grid-cols-1 lg:grid-cols-1 grid-cols-1 gap-8 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-100 transition duration-300 text-left"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-stretch md:gap-8">
                <div className="relative w-full h-48 overflow-hidden rounded-md md:w-1/3 md:h-auto md:min-h-[12rem]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center space-y-3">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
