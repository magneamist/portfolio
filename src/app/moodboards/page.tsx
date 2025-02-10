import MyStyleMoodboard from "@/components/MyStyleMoodboard";
import HomeMarquee from "@/components/HomeMarquee";
import FamMarquee from "@/components/FamMarquee";
import HobbiesSection from "@/components/HobbiesSection";

export default function Moodboards() {
  return (
    <div className="flex flex-col gap-12">
      <div className="h-screen flex flex-col justify-between pb-5">
        <div className="flex flex-row gap-10 pt-20">
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
      </div>
      <div className="h-screen flex flex-col gap-12">
        <HobbiesSection></HobbiesSection>
        <FamMarquee></FamMarquee>
      </div>
    </div>
  );
}
