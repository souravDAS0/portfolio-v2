"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbox } from "@/components/common/lightbox";
import { ProjectImage } from "@/lib/types/project";
import { cn } from "@/lib/utils";

export interface ImageGalleryProps {
  images: ProjectImage[];
  className?: string;
}

export function ImageGallery({ images, className }: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      <div
        className={cn("grid grid-cols-2 gap-4 md:grid-cols-3", className)}
        role="group"
        aria-label="Project image gallery"
      >
        {images.map((image, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="bg-muted group relative aspect-video cursor-pointer overflow-hidden rounded-lg"
            onClick={() => openLightbox(index)}
            aria-label={`View image: ${image.alt}`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover transition-all group-hover:brightness-110"
              sizes="(max-width: 768px) 50vw, 33vw"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        images={images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </>
  );
}
