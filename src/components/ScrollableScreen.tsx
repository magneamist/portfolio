import React, { useRef, useState, useEffect, useCallback } from "react";

interface ScrollableScreenProps {
  imageSrc: string;
  altText: string;
  textSize?: string;
  width?: string;
  title: string;
}

const ScrollableScreen: React.FC<ScrollableScreenProps> = ({
  imageSrc,
  altText,
  textSize = "",
  width = "max-w-2xl",
  title,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // Calculate max scroll when image loads or container resizes
  const calculateMaxScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const image = container.querySelector("img");
    if (!image) return;

    const newMaxScroll = Math.max(
      0,
      image.clientHeight - container.clientHeight
    );
    setMaxScroll(newMaxScroll);

    // Reset scroll position if it exceeds the new max
    setScrollPosition((prevPos) => Math.min(prevPos, newMaxScroll));
  }, []);

  // Handle image load
  const handleImageLoad = useCallback(() => {
    calculateMaxScroll();
  }, [calculateMaxScroll]);

  // Handle wheel event
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      const newScrollPosition = scrollPosition + e.deltaY;
      const clampedPosition = Math.max(
        0,
        Math.min(newScrollPosition, maxScroll)
      );
      setScrollPosition(clampedPosition);
      e.preventDefault();
    },
    [scrollPosition, maxScroll]
  );

  // Set up event listeners
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add wheel event listener with passive: false
    container.addEventListener("wheel", handleWheel, { passive: false });

    // Set up resize observer
    const resizeObserver = new ResizeObserver(() => {
      calculateMaxScroll();
    });

    resizeObserver.observe(container);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      resizeObserver.disconnect();
    };
  }, [handleWheel, calculateMaxScroll]);

  return (
    <div className="flex flex-col items-center gap-3 sm:gap-6">
      <span className={`font-alexandria font-bold ${textSize}`}>{title}</span>
      <div
        ref={containerRef}
        className={`rounded-xl aspect-[16/10] drop-shadow-md ${width}`}
        style={{
          cursor: maxScroll > 0 ? "ns-resize" : "default",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            transform: `translateY(-${scrollPosition}px)`,
            willChange: "transform",
            height: "100%",
            width: "100%",
            position: "relative",
          }}
        >
          <img
            src={imageSrc}
            alt={altText}
            className="w-full object-cover"
            onLoad={handleImageLoad}
            style={{ display: "block" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollableScreen;
