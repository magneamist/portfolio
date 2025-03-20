"use client";
import Image from "next/image";
import NextProjectSection from "@/components/NextProjectSection";
import ProjectText from "@/components/ProjectText";
import ScrollableScreen from "@/components/ScrollableScreen";

export default function StudioGhibli() {
  const color = "#AE514B";
  const title = "Studio Ghibli";
  const year = 2024;
  const duration = "2 days";
  const role = ["Redesign", "UI/UX design"];
  const description =
    "This was my first redesign project, focusing on improving the Ghibli Collection landing page. My goal was to create a more modern, visually appealing, and intuitive experience. I started by analyzing usability issues and design weaknesses, then reworked the layout with a clearer structure and improved visual hierarchy. The new design features better readability, enhanced navigation, and a refreshed aesthetic, making the site more engaging and accessible for users.";
  // "Lorem ipsum dolor sit amet consectetur. Consequat quam odio nulla eget suspendisse. Phasellus urna gravida vitae urna nibh. Et nisl bibendum faucibus enim sodales at. Est risus ut nulla sit integer est. Senectus fermentum pharetra nisi pellentesque dis sit nec.";

  // const [showOld, setShowOld] = useState(true);
  return (
    <div className="flex flex-col items-center gap-4 sm:gap-14 w-full">
      <div className="sm:px-44 py-10 w-full">
        <div className="sm:min-h-[740px]  sm:h-screen flex justify-center items-center">
          <Image
            src="/projects/studioghibli/studioGhibli.png"
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
            src="/projects/studioghibli/font1.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px] border-[1px] sm:border-2 border-grey"
          ></Image>
          <Image
            src="/projects/studioghibli/font2.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px] border-2 border-grey"
          ></Image>
          <Image
            src="/projects/studioghibli/colors1.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px] border-2 border-grey"
          ></Image>
          <Image
            src="/projects/studioghibli/colors2.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px] border-2 border-grey"
          ></Image>
        </div>
      </div>
      <div className="flex flex-col items-center gap-14">
        <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
          <ScrollableScreen
            imageSrc="/projects/studioghibli/sgOld.jpg"
            altText="Scrollable content"
            textSize="text-xl sm:text-4xl"
            title="Old"
          />
          <ScrollableScreen
            imageSrc="/projects/studioghibli/sgNew.png"
            altText="Scrollable content"
            textSize="text-xl sm:text-4xl"
            title="New"
          />
        </div>
      </div>
      <NextProjectSection
        href="/projects/foodstory"
        project="Food story"
      ></NextProjectSection>
    </div>
  );
}
