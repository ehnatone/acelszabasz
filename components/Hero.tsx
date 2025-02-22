import { JSX } from "react";

export default function Hero(): JSX.Element {
  return (
    <div className="snap-always snap-center">
      <section className="hero bg-black min-h-[calc(100vh-6rem)]">
        <video autoPlay loop muted className="h-[calc(100vh-6rem)]">
          <source src="hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1 className="m-4">Van egy elképzelésed? Én megvalósítom!</h1>
          <p className="text-lg m-4">Acélból építek, bizalomból dolgozom.</p>
          <p className="text-lg m-4">
            Minőség, megbízhatóság és szakértelem egy helyen.
          </p>
        </div>
      </section>
    </div>
  );
}
