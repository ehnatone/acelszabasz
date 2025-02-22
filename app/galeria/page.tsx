import Gallery from "@/components/Gallery/Gallery";
import fs from "fs";
import path from "path";

export default function GalleryPage() {
  const galleryDir = path.join(process.cwd(), "public", "galleria");
  console.log(galleryDir);
  const images = fs.readdirSync(galleryDir).map((file) => `/galleria/${file}`);
  const sortedImages = images.sort(
    (a, b) => parseInt(a.split("-")[0]) - parseInt(b.split("-")[0])
  );

  return (
    <section
      id="galeria"
      className="relative min-h-[calc(100vh-6rem)] flex items-center bg-gray-100"
    >
      <div className="container max-h-[calc(100vh-6rem)] mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-700 py-10">Galéria</h2>

        <Gallery images={sortedImages} />
      </div>
    </section>
  );
}
