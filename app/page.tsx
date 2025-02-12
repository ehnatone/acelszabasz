export default function Home() {
  return (
    <main className="min-h-screen font-[family-name:var(--font-geist-sans)] ">
      <section className="hero bg-black">
        <video autoPlay loop muted className="w-full">
          <source src="hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1 className="m-4">Van egy elképzelésed? Én megvalósítom.</h1>
          <p className="text-lg m-4">Acélból építek, bizalomból dolgozom.</p>
          <p className="text-lg m-4">
            Minőség, megbízhatóság és szakértelem egy helyen.
          </p>
        </div>
      </section>

      <section id="rolunk" className="py-20 bg-blue-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-700">Rólunk</h2>
          <p className="mt-4">Itt jön a bemutatkozó szöveg.</p>
        </div>
      </section>

      <section id="szolgaltatasok" className="py-20 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-700">Szolgáltatások</h2>
          <p className="mt-4">Itt kerülnek bemutatásra a szolgáltatások.</p>
        </div>
      </section>

      <section id="galeria" className="py-20 bg-blue-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-700">Galéria</h2>
          <p className="mt-4">Később ide kerülhet a Facebook integráció.</p>
        </div>
      </section>

      <section id="kapcsolat" className="py-20 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-700">Kapcsolat</h2>
          <p className="mt-4">Elérhetőségek és űrlap a kapcsolatfelvételhez.</p>
        </div>
      </section>
    </main>
  );
}
