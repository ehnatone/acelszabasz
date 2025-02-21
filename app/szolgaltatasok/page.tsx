import Image from "next/image";

const services = [
  {
    title: "Úszókapuk",
    description:
      "Úszókapuink modern és praktikus megoldást kínálnak minden olyan ingatlan számára, ahol a helytakarékosság és a könnyű kezelhetőség kiemelt szempont. Az úszókapuk fő előnye, hogy nem igényelnek sínrendszert a talajon, így problémamentesen működnek egyenetlen vagy havas felületeken is. Cégünk kizárólag minőségi alapanyagokat és precíz technológiát alkalmaz a kapuk gyártása és szerelése során, hogy ügyfeleink hosszú távon megbízható, esztétikus és könnyen karbantartható kaput kapjanak. Egyedi igények szerint méretre gyártunk úszókapukat, amelyek modern vagy klasszikus kialakítással is rendelhetők.",
    image: "/1.jpg",
  },
  {
    title: "Kerítések",
    description:
      "Egy jól megtervezett és kivitelezett kerítés nemcsak biztonságot nyújt, hanem esztétikai szempontból is meghatározó eleme egy ingatlannak. Különféle típusú kerítések gyártását és telepítését vállaljuk, legyen szó kovácsoltvas, modern fém vagy kombinált fa-fém szerkezetekről. Kiemelten figyelünk arra, hogy az általunk készített kerítések időtállóak, időjárásállóak és minimális karbantartást igénylő megoldások legyenek. Személyre szabott terveinknek köszönhetően minden ügyfelünk olyan kerítést kaphat, amely tökéletesen illeszkedik ingatlanához és egyedi elképzeléseihez.",
    image: "/2.jpg",
  },
  {
    title: "Lépcsők",
    description:
      "A lépcsők nem csupán funkcionális szerkezetek, hanem esztétikai szempontból is meghatározó elemei egy épületnek. Beltéri és kültéri lépcsők gyártását egyaránt vállaljuk. Az ügyfél igényei alapján modern, letisztult vagy akár díszes kivitelű lépcsőket is készítünk, amelyek strapabíróak, biztonságosak és esztétikusak. Különös figyelmet fordítunk a pontos méretezésre és hogy a lépcső kényelmes és stabil használatot biztosítson hosszú éveken át.",
    image: "/3.jpg",
  },
  {
    title: "Korlátok",
    description:
      "A korlátok egyik legfontosabb funkciója a biztonság, de emellett meghatározó dizájnelemei is lehetnek egy épületnek. Egyedi fémszerkezetű acél vagy kovácsoltvas korlátok gyártását és telepítését is vállaljuk. Legyen szó beltéri vagy kültéri megoldásokról, minden esetben figyelünk a precíz kivitelezésre, az időjárásállóságra és az esztétikai megjelenésre. Egyedi tervezésünknek köszönhetően modern vagy klasszikus stílusban is elkészítjük a korlátokat, így azok tökéletesen illeszkednek a lépcsőhöz, erkélyhez vagy teraszhoz.",
    image: "/3.jpg",
  },
  {
    title: "Tárolók és Garázsok",
    description:
      "A tárolók, garázsok és kennelek nemcsak praktikus megoldást nyújtanak, hanem esztétikailag is hozzájárulhatnak otthonunk vagy vállalkozásunk rendezett megjelenéséhez. Egyedi igényekre szabott fém és acélszerkezetű tárolók, garázsok és kennelek gyártásával és telepítésével is foglalkozunk. Legyen szó egy kisállat kényelmes és biztonságos elhelyezéséről, járművének védelméről vagy kerti szerszámainak rendszerezett tárolásáról, mi időtálló és esztétikus megoldásokat kínálunk. A precíz kivitelezés és a tartós anyagok garantálják, hogy termékeink hosszú távon megbízhatóan szolgálják Önt. Egyedi tervezésünknek köszönhetően modern és klasszikus stílusban is elkészítjük a szerkezeteket, hogy tökéletesen illeszkedjenek környezetükbe.",
    image: "/4.jpg",
  },
  {
    title: "Egyéb egyedi acél szerkezetek",
    description:
      "Vállalkozásunk egyedi méretre gyártott acélszerkezetek gyártásával és telepítésével is foglalkozik, igazodva az Ön igényeihez és a környezet adottságaihoz. Legyen szó terasz- és előtetőkről, vagy árnyékolókról és pergolákról, valamint eljesen egyéb egyedi szerkezetek kivitelezését is vállaljuk. Ezen kívül egyéb szerkezeteket, állványokat, tartókat is el tudunk készíteni. ",
    image: "/5.jpg",
  },
];

export default function ServicesPage() {
  return (
    <section
      id="szolgaltatasok"
      className="relative min-h-[calc(100vh-8rem)] flex items-center bg-gray-100"
    >
      <div className="container max-h-[calc(100vh-8rem)]  overflow-y-auto scroll-smooth mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-700 py-10">
          Szolgáltatások
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          Professzionális acélszerkezet-gyártás és telepítés egy helyen.
        </p>

        {/* Service Grid */}
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300"
            >
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
