import { type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

interface ImageGalleryProps extends ComponentPropsWithoutRef<"div"> {
  images: string[];
  className?: string;
}

const ImageGallery = ({ images, className, ...props }: ImageGalleryProps) => {
  if (!images || images.length === 0) {
    return null;
  }

  // Layout: Row 1 = 1 full-width image, Row 2 = 2 images (50% each), then repeat
  const getGridClass = (index: number): string => {
    const positionInRow = index % 3;
    if (positionInRow === 0) {
      return "md:col-span-2"; // First image of each row: full width (2 columns)
    }
    return "md:col-span-1"; // Second/third images: half width (1 column each)
  };

  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 gap-4 md:grid-cols-2",
        className,
      )}
      {...props}
    >
      {images.map((src, index) => (
        <div
          key={index}
          className={cn(
            "group relative overflow-hidden rounded-xl",
            getGridClass(index),
          )}
        >
          <img
            src={src}
            alt={`Gallery image ${index + 1}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
        </div>
      ))}
    </div>
  );
};

export { ImageGallery };
