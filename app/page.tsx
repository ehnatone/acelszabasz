import GalleryPage from "./galeria/page";
import ServicesPage from "./szolgaltatasok/page";
import AboutPage from "./rolunk/page";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { Fragment } from "react";
import Contact from "./kapcsolat/page";

export default function Home() {
  return (
    <Fragment>
      <div className="snap-always snap-center">
        <section className="hero bg-black min-h-[calc(100vh-4rem)]">
          <video autoPlay loop muted className="h-[calc(100vh-4rem)]">
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

      <AboutPage />

      <div className="snap-always snap-center">
        <ServicesPage />
      </div>
      <div className="snap-always snap-center">
        <GalleryPage />
      </div>
      <div className="snap-always snap-center">
        <Contact />
      </div>

      <Footer>
        <p>
          {
            "Minden jog fenntartva. Az oldal használatával automatikusan elfogadja a "
          }
          <Link className="hover:underline" href="feltetelek">
            használati feltételeket.
          </Link>
        </p>
      </Footer>
    </Fragment>
  );
}
