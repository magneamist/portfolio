"use client";

import Skills from "@/components/Skills";
import ContactCard from "@/components/ContactCard";
import ProjectSection from "@/components/ProjectSection";
import Nominations from "@/components/Nominations";
import AboutMeSection from "@/components/AboutMeSection";

export default function Home() {
  return (
    <div className="flex flex-col sm:gap-5">
      <AboutMeSection />
      <Skills />
      <Nominations />
      <ProjectSection />
      <ContactCard />
    </div>
  );
}
