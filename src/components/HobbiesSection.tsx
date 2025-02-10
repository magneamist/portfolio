"use client";
import { useState } from "react";
import Image from "next/image";

export default function HobbiesSection() {
  const hobbyImages = [
    "knit.png",
    "pearls.png",
    "bake.png",
    "folf.png",
    "puzzle.png",
    "golf.png",
    "shuffle.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPreviousImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? hobbyImages.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 100);
  };

  const goToNextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === hobbyImages.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 100);
  };

  return (
    <div className="flex flex-col gap-3 w-fit">
      <div className="flex flex-col w-[500px] relative overflow-hidden h-[400px]">
        {hobbyImages.map((image, index) => (
          <div
            key={image}
            className={`
              absolute top-0 left-0 w-full h-full flex items-center justify-center
              transition-all duration-500 ease-in-out
              ${
                index === currentImageIndex
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-95 z-0"
              }
            `}
          >
            <Image
              src={`/hobbies/${image}`}
              alt={`Hobby image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-10 justify-between">
        <button
          onClick={goToPreviousImage}
          disabled={isTransitioning}
          className="disabled:opacity-50"
        >
          <Image
            src={"/arrow.svg"}
            width={32}
            height={32}
            alt="Previous"
            className="rotate-180"
          />
        </button>
        <button
          onClick={goToNextImage}
          disabled={isTransitioning}
          className="disabled:opacity-50"
        >
          <Image
            src={"/arrow.svg"}
            width={32}
            height={32}
            alt="Next"
            className=""
          />
        </button>
      </div>
    </div>
  );
}
