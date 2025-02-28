import GalleryPage from "./galeria/page";
import ServicesPage from "./szolgaltatasok/page";
import AboutPage from "./rolam/page";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { Fragment } from "react";
import Contact from "./kapcsolat/page";

export default function Home() {
  return (
    <Fragment>
      <Hero />

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
          <Link className="hover:underline" href="/jogi-nyilatkozat">
            használati feltételeket.
          </Link>
        </p>
      </Footer>
    </Fragment>
  );
}
