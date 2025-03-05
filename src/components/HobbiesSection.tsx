"use client";
import { useState, useEffect, useRef } from "react";
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
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    // Clear existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Only set a new timer if not hovered
    if (!isHovered) {
      timerRef.current = setInterval(goToNextImage, 3000);
    }
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

  const handleImageClick = () => {
    goToNextImage();
    resetTimer();
  };

  useEffect(() => {
    // Initial timer setup
    timerRef.current = setInterval(goToNextImage, 3000);

    // Cleanup function
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Pause or resume timer based on hover state
    if (isHovered) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    } else {
      resetTimer();
    }
  }, [isHovered]);

  return (
    <div className="flex flex-col gap-3 w-fit">
      <div
        className="flex flex-col w-[500px] relative overflow-hidden h-[400px] hover:scale-105 duration-500 cursor-pointer"
        onClick={handleImageClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
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
    </div>
  );
}
