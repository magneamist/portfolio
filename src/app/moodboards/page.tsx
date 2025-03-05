import MyStyleMoodboard from "@/components/MyStyleMoodboard";
import HomeMarquee from "@/components/HomeMarquee";
import FamMarquee from "@/components/FamMarquee";
import HobbiesSection from "@/components/HobbiesSection";

export default function Moodboards() {
  return (
    <div className="flex flex-col gap-12">
      <div className="h-screen flex flex-col gap-16 pb-5">
        <div className="flex gap-10 pt-24">
          <div className="pt-6">
            <h1 className="font-alexandria text-left text-4xl">Moodboards</h1>
            <p>
              You found the hidden treasure! Here you can explore my
              personality. This is a place where you can get to know me better
              on a personal level. Enjoy!
            </p>
          </div>
          <MyStyleMoodboard />
        </div>
        <HomeMarquee />
        <HobbiesSection />
        <FamMarquee />
      </div>
      <div className="h-screen flex flex-col gap-12"></div>
    </div>
  );
}
