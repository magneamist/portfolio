import MyStyleMoodboard from "@/components/MyStyleMoodboard";
import HomeMarquee from "@/components/HomeMarquee";
import FamMarquee from "@/components/FamMarquee";
import HobbiesSection from "@/components/HobbiesSection";
import Image from "next/image";

export default function Moodboards() {
  return (
    <div className="flex flex-col gap-12">
      <div className="h-screen flex flex-col justify-between pb-5">
        <div className="flex gap-6 pt-24 ">
          <div className="flex flex-col">
            <h1 className="font-alexandria text-left text-5xl pb-4">
              You found the hidden treasure!
            </h1>
            <p>
              Here, you get to know me beyond my work. This is a glimpse into my
              world, my personal style, dream home decor, creativity, movement,
              and the people who mean the most to me. Enjoy!
            </p>
          </div>
          <MyStyleMoodboard />
        </div>
        <HomeMarquee />
      </div>
      <div className="h-screen flex flex-col justify-between py-10 ">
        <div className="w-full flex justify-between">
          <HobbiesSection />
          <Image
            src="/fam/kisi.png"
            alt="art"
            width={300}
            height={400}
            className="hover:scale-110 duration-500 ease-in-out"
          />
          <Image
            src="/art.png"
            alt="art"
            width={400}
            height={400}
            className="mr-10 hover:scale-110 duration-500 ease-in-out "
          />
        </div>
        <FamMarquee />
      </div>
    </div>
  );
}
