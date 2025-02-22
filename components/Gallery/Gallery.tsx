"use client";

import { Fragment, useEffect, useState } from "react";
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

  const [shownCount, setShownCount] = useState(8);
  const [visibleImages, setVisibleImages] = useState(
    images.slice(0, shownCount)
  );
  const [loaded, setLoaded] = useState(false);

  const loadMore = () => {
    setShownCount(shownCount + 16);
  };

  const handleShowMoreClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!loaded) {
      loadMore();
    } else {
      setShownCount(8);
    }
  };

  useEffect(() => {
    setVisibleImages(images.slice(0, shownCount));
    if (shownCount >= images.length) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [images, shownCount]);

  return (
    <Fragment>
      {/* Image Grid */}
      <div className="max-h-[calc(100vh-14rem)] overflow-y-auto scroll-smooth">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-4 ">
          {
            /*sorted by filename then map */
            visibleImages.map((src, index) => (
              <div
                key={index}
                className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:scale-105 transition duration-300"
                onClick={() => setLightboxIndex(index)}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  width={360}
                  height={270}
                  className="w-full h-full object-cover"
                />
                {
                  /*if last image index then add button*/
                  index === visibleImages.length - 1 && (
                    <button
                      className="absolute bottom-2 my-2 right-[calc(50%-4.5rem)] px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-300 w-36 mb-10"
                      onClick={handleShowMoreClick}
                    >
                      {!loaded ? "Mutass még" : "Elrejtés"}
                    </button>
                  )
                }
              </div>
            ))
          }
        </div>
      </div>

      {/* Load More Button */}

      {/* Lightbox Popup */}
      {lightboxIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
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
            className="absolute top-4 right-4 text-white text-3xl z-50"
            onClick={() => setLightboxIndex(null)}
          >
            ✕
          </button>

          <button
            className="absolute left-5 text-white text-4xl bg-gray-800 px-3 py-2 rounded-full z-50"
            onClick={prevImage}
          >
            ◀
          </button>
          <button
            className="absolute right-5 text-white text-4xl bg-gray-800 px-3 py-2 rounded-full z-50"
            onClick={nextImage}
          >
            ▶
          </button>
        </div>
      )}
    </Fragment>
  );
}
