"use client";
import { useState } from "react";
import Image from "next/image";

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prevIndex) => (prevIndex! + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (prevIndex) => (prevIndex! - 1 + images.length) % images.length
      );
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-700 mb-8">Galéria</h2>

        {/* Image Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:scale-105 transition duration-300"
              onClick={() => setLightboxIndex(index)}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Lightbox Popup */}
        {lightboxIndex !== null && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={() => setLightboxIndex(null)}
            >
              ✕
            </button>

            <button
              className="absolute left-5 text-white text-4xl bg-gray-800 px-3 py-2 rounded-full"
              onClick={prevImage}
            >
              ◀
            </button>

            <div className="relative max-w-3xl p-4">
              <Image
                src={images[lightboxIndex]}
                alt={`Gallery image ${lightboxIndex + 1}`}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <button
              className="absolute right-5 text-white text-4xl bg-gray-800 px-3 py-2 rounded-full"
              onClick={nextImage}
            >
              ▶
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
