"use client";
import { useState } from "react";
import Link from "next/link";
import Project from "./Project";
import Image from "next/image";

type Project = {
  name: string;
  type: string;
  src: string;
  link: string;
};

export default function ProjectSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      name: "Magnea Mist",
      type: "portfolio",
      src: "/projects/magneamist/portfolio.png",
      link: "/projects/magneamist",
    },
    {
      name: "Vestra",
      type: "startup",
      src: "/projects/vestra/vestra.png",
      link: "/projects/vestra",
    },
    {
      name: "Lúna",
      type: "startup",
      src: "/projects/luna/luna.png",
      link: "/projects/lunaai",
    },
    {
      name: "Studio Ghibli",
      type: "school project",
      src: "/projects/studioghibli/studioGhibli.png",
      link: "/projects/studioghibli",
    },
    {
      name: "Food story",
      type: "group school project",
      src: "/projects/foodstory/foodstory.png",
      link: "/projects/foodstory",
    },
  ];

  return (
    <div className="sm:grid sm:grid-cols-8 gap-10 items-center sm:h-screen">
      <div className="xl:col-span-5 sm:col-span-4 relative h-full  hidden sm:block ">
        {projects.map((project) => (
          <div
            key={project.name}
            className={`absolute inset-0 flex items-center justify-center
              transition-all duration-1000 ease-in-out
              ${
                hoveredProject === project.name
                  ? "opacity-100 blur-0 z-10"
                  : "opacity-0 blur-md z-0"
              }`}
          >
            <Image
              src={project.src}
              width={2000}
              height={2000}
              className="rounded-3xl w-full h-auto object-contain"
              alt={`Screenshot of ${project.name}`}
            />
          </div>
        ))}
      </div>
      <ul className="xl:col-span-3 xl:col-start-6 sm:col-span-4 sm:col-start-5">
        <li className="pb-4">
          <h2 className="pb-4 text-4xl sm:text-[64px]">Projects</h2>
          <hr className="border-foreground rounded-md" />
        </li>
        {projects.map((project) => (
          <Link key={project.name} href={project.link} className="block">
            <li
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.name)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Project project={project.name} projectType={project.type} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
