"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export interface ServiceGalleryGroup {
  key: string;
  title: string;
  images: string[];
}

interface ServiceGalleryProps {
  services: ServiceGalleryGroup[];
}

const INITIAL_VISIBLE_COUNT = 4;
const LOAD_MORE_STEP = 16;

export default function ServiceGallery({ services }: ServiceGalleryProps) {
  const serviceMap = useMemo(() => {
    const map = new Map<string, ServiceGalleryGroup>();
    services.forEach((service) => {
      map.set(service.key, service);
    });
    return map;
  }, [services]);

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [visibleCounts, setVisibleCounts] = useState<Record<string, number>>({});
  const [lightbox, setLightbox] = useState<{ key: string; index: number } | null>(
    null,
  );

  useEffect(() => {
    setExpanded((prev) => {
      const next: Record<string, boolean> = {};
      services.forEach((service, index) => {
        next[service.key] = prev[service.key] ?? index === 0;
      });
      if (Object.keys(prev).length === Object.keys(next).length) {
        const unchanged = Object.keys(next).every(
          (key) => prev[key] === next[key],
        );
        if (unchanged) {
          return prev;
        }
      }
      return next;
    });
  }, [services]);

  useEffect(() => {
    setVisibleCounts((prev) => {
      const next: Record<string, number> = {};
      services.forEach((service) => {
        const max = service.images.length;
        if (max === 0) {
          next[service.key] = 0;
          return;
        }
        const defaultVisible = Math.min(INITIAL_VISIBLE_COUNT, max);
        const previous = prev[service.key];
        next[service.key] =
          previous === undefined ? defaultVisible : Math.min(previous, max);
      });
      if (Object.keys(prev).length === Object.keys(next).length) {
        const unchanged = Object.keys(next).every(
          (key) => prev[key] === next[key],
        );
        if (unchanged) {
          return prev;
        }
      }
      return next;
    });
  }, [services]);

  useEffect(() => {
    setLightbox((prev) => {
      if (!prev) {
        return prev;
      }
      const service = serviceMap.get(prev.key);
      if (!service || service.images.length === 0) {
        return null;
      }
      const clampedIndex = Math.min(prev.index, service.images.length - 1);
      if (clampedIndex === prev.index) {
        return prev;
      }
      return { key: prev.key, index: clampedIndex };
    });
  }, [serviceMap]);

  const toggleExpand = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleShowMore = (key: string) => {
    const service = serviceMap.get(key);
    if (!service) {
      return;
    }

    setVisibleCounts((prev) => {
      const current = prev[key] ?? Math.min(INITIAL_VISIBLE_COUNT, service.images.length);
      if (service.images.length === 0) {
        return prev;
      }
      const fullyLoaded = current >= service.images.length;
      const nextCount = fullyLoaded
        ? Math.min(INITIAL_VISIBLE_COUNT, service.images.length)
        : Math.min(current + LOAD_MORE_STEP, service.images.length);

      if (nextCount === current) {
        return prev;
      }

      return { ...prev, [key]: nextCount };
    });
  };

  const openLightbox = (key: string, index: number) => {
    setLightbox({ key, index });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  const moveLightbox = (direction: 1 | -1) => {
    setLightbox((prev) => {
      if (!prev) {
        return prev;
      }
      const service = serviceMap.get(prev.key);
      if (!service || service.images.length === 0) {
        return null;
      }
      const total = service.images.length;
      const nextIndex = (prev.index + direction + total) % total;
      return { key: prev.key, index: nextIndex };
    });
  };

  const activeService = lightbox ? serviceMap.get(lightbox.key) : undefined;

  return (
    <div className="space-y-6">
      {services.map((service) => {
        const isExpanded = expanded[service.key] ?? false;
        const max = service.images.length;
        const visibleCount =
          visibleCounts[service.key] ?? Math.min(INITIAL_VISIBLE_COUNT, max);
        const visibleImages = service.images.slice(0, visibleCount);
        const canToggleVisibility = max > INITIAL_VISIBLE_COUNT;
        const fullyLoaded = visibleCount >= max;

        return (
          <div
            key={service.key}
            className="rounded-lg shadow-lg overflow-hidden"
          >
            <button
              type="button"
              onClick={() => toggleExpand(service.key)}
              className="w-full rounded-none flex items-center justify-between px-6 py-4 text-left text-xl font-semibold text-red-600 hover:text-white bg-gray-100 border-b-2 border-red-600 transition hover:bg-red-600 hover:border-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              aria-expanded={isExpanded}
            >
              <span>{service.title}</span>
              <span className="flex items-center" aria-hidden="true">
                {isExpanded ? (
                  <FaChevronUp className="h-5 w-5" />
                ) : (
                  <FaChevronDown className="h-5 w-5" />
                )}
              </span>
            </button>

            {isExpanded && (
              <div className="px-6 pb-6 pt-4">
                {max === 0 ? (
                  <p className="text-left text-gray-500">
                    Nincs feltöltött kép ebben a kategóriában.
                  </p>
                ) : (
                  <>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                      {visibleImages.map((src, index) => (
                        <div
                          key={src}
                          className="relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105 transition duration-300"
                          onClick={() => openLightbox(service.key, index)}
                        >
                          <Image
                            src={src}
                            alt={`${service.title} kép ${index + 1}`}
                            width={360}
                            height={270}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>

                    {canToggleVisibility && (
                      <div className="flex justify-center mt-6">
                        <button
                          type="button"
                          onClick={() => handleShowMore(service.key)}
                          className="px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-300"
                        >
                          {fullyLoaded ? "Kevesebb" : "Több"}
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        );
      })}

      {activeService && lightbox && activeService.images.length > 0 && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-3xl p-4">
            <Image
              src={activeService.images[lightbox.index]}
              alt={`${activeService.title} kép ${lightbox.index + 1}`}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <button
            type="button"
            className="absolute top-4 right-4 text-white text-3xl z-50"
            onClick={closeLightbox}
          >
            ✕
          </button>
          <button
            type="button"
            className="absolute left-5 text-white text-4xl bg-gray-800 px-3 py-2 rounded-full z-50"
            onClick={() => moveLightbox(-1)}
          >
            ◀
          </button>
          <button
            type="button"
            className="absolute right-5 text-white text-4xl bg-gray-800 px-3 py-2 rounded-full z-50"
            onClick={() => moveLightbox(1)}
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
}
