"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

interface FittedHeadingProps {
  children: ReactNode;
  className?: string;
  minFontSize?: number; // in rem
  maxFontSize?: number; // in rem
  color?: string;
}

export function FittedHeading({
  children,
  className = "",
  minFontSize = 2,
  maxFontSize = 6,
  color,
}: FittedHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [fontSize, setFontSize] = useState(`${maxFontSize}rem`);

  useEffect(() => {
    const resizeText = () => {
      if (!headingRef.current || !containerRef.current) return;

      // Start with maximum font size
      let size = maxFontSize;
      headingRef.current.style.fontSize = `${size}rem`;

      // Reduce font size until it fits
      while (
        headingRef.current.scrollWidth > containerRef.current.clientWidth &&
        size > minFontSize
      ) {
        size -= 0.1;
        headingRef.current.style.fontSize = `${size}rem`;
      }

      setFontSize(`${size}rem`);
    };

    resizeText();

    // Add resize event listener
    window.addEventListener("resize", resizeText);

    // Handle initial content change
    const observer = new MutationObserver(resizeText);
    if (headingRef.current) {
      observer.observe(headingRef.current, { childList: true, subtree: true });
    }

    return () => {
      window.removeEventListener("resize", resizeText);
      observer.disconnect();
    };
  }, [children, minFontSize, maxFontSize]);

  return (
    <div ref={containerRef} className="w-full">
      <h1
        ref={headingRef}
        className={`w-full font-bold leading-tight sm:leading-none whitespace-nowrap ${className}`}
        style={{ fontSize, color }}
      >
        {children}
      </h1>
    </div>
  );
}
