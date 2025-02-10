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
      src: "/projects/portfolio.png",
      link: "/projects/magneamist",
    },
    {
      name: "Vestra",
      type: "startup",
      src: "/projects/vestraFinal.png",
      link: "/projects/vestra",
    },
    {
      name: "Lúna",
      type: "startup",
      src: "/projects/luna.png",
      link: "/projects/lunaai",
    },
    {
      name: "Studio Ghibli",
      type: "school project",
      src: "/projects/studioGhibli.png",
      link: "/projects/studioghibli",
    },
    {
      name: "Food story",
      type: "group school project",
      src: "/projects/foodstory.png",
      link: "/projects/foodstory",
    },
  ];

  return (
    <div className="grid grid-cols-8 gap-10 items-center h-screen">
      <div className="col-span-5 relative h-full">
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
      <ul className="col-span-3 col-start-6">
        <li className="pb-4">
          <h2 className="pb-4">Projects</h2>
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
