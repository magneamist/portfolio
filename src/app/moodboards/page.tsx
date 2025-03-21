import MyStyleMoodboard from "@/components/MyStyleMoodboard";
import HomeMarquee from "@/components/HomeMarquee";
import FamMarquee from "@/components/FamMarquee";
import HobbiesSection from "@/components/HobbiesSection";
import Image from "next/image";

export default function Moodboards() {
  return (
    <div className="flex flex-col min-h-[200vh]">
      {/* First section - full height view */}
      <section className="min-h-screen flex flex-col justify-between relative">
        <div className="flex flex-col pb-12 md:flex-row justify-between items-center gap-4 pt-16 md:pt-24 flex-grow">
          <div className="flex flex-col max-w-2xl w-full">
            <h1 className="font-alexandria text-center md:text-left text-4xl leading-normal  sm:text-foreground md:text-4xl pb-4">
              You found the hidden treasure!
            </h1>
            <p className="text-center md:text-left mb-6 md:mb-0">
              Here, you get to know me beyond my work. This is a glimpse into my
              world, my personal style, dream home decor, creativity, movement,
              and the people who mean the most to me. Enjoy!
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
            <MyStyleMoodboard />
          </div>
        </div>

        {/* Home Marquee positioned at the bottom of the first screen */}
        <div className="w-full pb-5 md:mt-0">
          <HomeMarquee />
        </div>
      </section>

      {/* Second section - full height view */}
      <section className="min-h-screen flex flex-col justify-between relative pt-10">
        <div className="max-sm:hidden flex flex-col md:flex-row justify-center items-center px-4 md:px-8 gap-8 flex-grow pb-10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 w-full">
            <div className="w-full md:w-1/3">
              <HobbiesSection />
            </div>

            <Image
              src="/fam/kisi.png"
              alt="kisi"
              width={200}
              height={100}
              className="hover:scale-110 duration-500 ease-in-out md:w-1/3"
            />

            <Image
              src="/art.png"
              alt="art"
              width={400}
              height={400}
              className="hover:scale-110 duration-500 ease-in-out md:w-1/3"
            />
          </div>
        </div>

        {/* Family Marquee positioned at the bottom of the second screen */}
        <div className="w-full mt-8 pb-5 md:mt-0">
          <FamMarquee />
        </div>
        <div className="flex justify-center">
          <Image
            src="/fam/kisi.png"
            alt="kisi"
            width={150}
            height={100}
            className="sm:hidden flex justify-center"
          />
        </div>
      </section>
    </div>
  );
}
