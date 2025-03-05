"use client";
import Image from "next/image";
import NextProjectSection from "@/components/NextProjectSection";
import ProjectText from "@/components/ProjectText";
import { useState } from "react";

export default function StudioGhibli() {
  const color = "#AE514B";
  const title = "Studio Ghibli";
  const year = 2024;
  const duration = "2 days";
  const role = ["Redesign", "UI/UX design"];
  const description =
    "Lorem ipsum dolor sit amet consectetur. Consequat quam odio nulla eget suspendisse. Phasellus urna gravida vitae urna nibh. Et nisl bibendum faucibus enim sodales at. Est risus ut nulla sit integer est. Senectus fermentum pharetra nisi pellentesque dis sit nec.";

  const [showOld, setShowOld] = useState(true);
  return (
    <div className="flex flex-col items-center gap-4 sm:gap-14 w-full">
      <div className="sm:px-44 py-10 w-full">
        <div className="sm:min-h-[740px]  sm:h-screen flex justify-center items-center">
          <Image
            src="/projects/studioGhibli.png"
            width={1050}
            height={2000}
            alt="Screenshot of Studio Ghibli project"
            className="rounded-[50px]"
          />
        </div>
        <div className="flex flex-col gap-3 sm:gap-14">
          <ProjectText
            color={color}
            title={title}
            year={year}
            duration={duration}
            role={role}
            description={description}
          ></ProjectText>
          <Image
            src="/projects/sg-font.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px] border-[1px] sm:border-2 border-grey"
          ></Image>
          <Image
            src="/projects/sg-font2.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px] border-2 border-grey"
          ></Image>
          <Image
            src="/projects/sg-color1.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px] border-2 border-grey"
          ></Image>
          <Image
            src="/projects/sg-color2.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px] border-2 border-grey"
          ></Image>
        </div>
      </div>
      <div className="flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-6">
          <div className="grid grid-cols-2 gap-4 sm:gap-16 px-4 sm:px-10">
            <div>
              <h3 className="text-xl sm:text-4xl text-center pb-3 sm:pb-12">
                <span className="text-sg-red font-extrabold">Old</span> page
              </h3>
              <Image
                src="/projects/studioghibliwebpage.jpg"
                width={1050}
                height={5000}
                alt="Studio Ghibli primary typeface"
                className="rounded-3xl"
              ></Image>
            </div>
            <div>
              <h3 className="text-xl sm:text-4xl text-center pb-3 sm:pb-12">
                <span className="text-sg-green">New</span> page
              </h3>
              <Image
                src="/projects/MyStudioGhibli.png"
                width={1050}
                height={5000}
                alt="Studio Ghibli primary typeface"
                className="rounded-3xl col-span-1 blur-md hover:blur-none duration-500 transition-all"
              ></Image>
            </div>
          </div>
        </div>
        <div id="redesign">
          <div className="flex gap-3 items-center justify-center pb-4">
            <button
              onClick={() => setShowOld(true)}
              className={showOld ? "font-bold" : "font-normal"}
            >
              Old
            </button>
            <span>|</span>
            <button
              onClick={() => setShowOld(false)}
              className={!showOld ? "font-bold" : "font-normal"}
            >
              New
            </button>
          </div>
          {showOld ? (
            <Image
              src="/projects/studioghibliwebpage.jpg"
              width={1050}
              height={5000}
              alt="Original Studio Ghibli webpage"
              className="rounded-3xl"
            />
          ) : (
            <Image
              src="/projects/MyStudioGhibli.png"
              width={1050}
              height={5000}
              alt="Redesigned Studio Ghibli webpage"
              className="rounded-3xl"
            />
          )}
        </div>
      </div>
      <NextProjectSection
        href="/projects/foodstory"
        project="Food story"
      ></NextProjectSection>
    </div>
  );
}
