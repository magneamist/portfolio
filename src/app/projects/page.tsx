"use client";
import ProjectSection from "@/components/ProjectSection";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    handleResize(); // Run on initial component render

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate opacity and blur based on scroll position
  // Fade out from fully visible to invisible over a 300px scroll distance
  const opacity = Math.max(0, 1 - scrollY / 200);
  const blurValue = Math.min(10, scrollY / 20);

  return (
    <div>
      <div className="flex flex-col max-sm:left-1/2 max-sm:-translate-x-1/2 sm:items-left gap-6 h-screen sm:justify-end justify-center fixed pointer-events-none ">
        <h1
          className="font-alexandria sm:text-left text-center text-5xl sm:text-[112px] sm:pb-4"
          style={{
            opacity: opacity,
            filter: isMobile ? "none" : `blur(${blurValue}px)`,
            transition: "opacity 0.2s, filter 0.2s",
          }}
        >
          Projects
        </h1>
      </div>
      {/* Empty spacer div to maintain layout with fixed header */}
      <div className="h-screen"></div>

      {isMobile ? (
        <div className="flex flex-col gap-10 pb-8">
          <MobileProjects
            title="Magnea Mist"
            link="/projects/magneamist"
            imgHref="/projects/magneamist/portfolio.png"
            alt="My portfolio project"
          />
          <MobileProjects
            title="Vestra"
            link="/projects/vestra"
            imgHref="/projects/vestra/vestra.png"
            alt="Vestra project"
          />
          <MobileProjects
            title="Lúna"
            link="/projects/lunaai"
            imgHref="/projects/luna/luna.png"
            alt="Lúna AI project"
          />
          <MobileProjects
            title="Studio Ghibli"
            link="/projects/studioghibli"
            imgHref="/projects/studioghibli/studioGhibli.png"
            alt="Studio Ghibli project"
          />
          <MobileProjects
            title="Foodstory"
            link="/projects/foodstory"
            imgHref="/projects/foodstory/foodstory.png"
            alt="Foodstory project"
          />
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <ProjectSection />
        </div>
      )}
    </div>
  );
}

const MobileProjects = ({
  link,
  imgHref,
  alt,
}: {
  title: string;
  link: string;
  imgHref: string;
  alt: string;
}) => {
  return (
    <Link href={link} className="flex flex-col items-center gap-4">
      {/* <h1 className="text-2xl">{title}</h1> */}
      <Image
        src={imgHref}
        width={1050}
        height={2000}
        alt={alt}
        className="rounded-[20px] sm:rounded-[50px]"
      />
    </Link>
  );
};
