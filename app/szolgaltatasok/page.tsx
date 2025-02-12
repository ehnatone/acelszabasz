import Image from "next/image";

const services = [
  {
    title: "Úszókapuk",
    description: "Egyedi, modern és tartós úszókapuk gyártása és telepítése.",
    image: "/1.jpg",
  },
  {
    title: "Kerítések",
    description: "Esztétikus és masszív kerítések készítése és szerelése.",
    image: "/2.jpg",
  },
  {
    title: "Lépcsők és Korlátok",
    description: "Modern és biztonságos acél lépcsők és korlátok gyártása.",
    image: "/3.jpg",
  },
  {
    title: "Csarnokok, Garázsok",
    description: "Nagy teherbírású csarnokok és garázsok kivitelezése.",
    image: "/4.jpg",
  },
  {
    title: "Egyedi Acél Szerkezetek",
    description: "Egyedi acélszerkezetek tervezése és kivitelezése.",
    image: "/5.jpg",
  },
  {
    title: "Bérhegesztés",
    description:
      "Professzionális bérhegesztési szolgáltatások egyedi igényekre.",
    image: "/6.jpg",
  },
];

export default function ServicesPage() {
  return (
    <section className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-700 mb-10">
          Szolgáltatások
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          Professzionális acélszerkezet-gyártás és telepítés egy helyen.
        </p>

        {/* Service Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4">
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
