import Gallery from "@/components/Gallery/Gallery";
import fs from "fs";
import path from "path";

export default function GalleryPage() {
  const galleryDir = path.join(process.cwd(), "public", "galleria");
  console.log(galleryDir);
  const images = fs.readdirSync(galleryDir).map((file) => `/galleria/${file}`);
  return (
    <section className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <Gallery images={images} />;
      </div>
    </section>
  );
}
