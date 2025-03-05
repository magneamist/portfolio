import NextProjectSection from "@/components/NextProjectSection";
import Image from "next/image";
import ProjectText from "@/components/ProjectText";

export default function Vestra() {
  const color = "#7CE37F";
  const title = "Vestra";
  const year = 2024;
  const duration = "2 weeks";
  const role = ["Branding", "UI/UX design"];
  const description = "It's a startup that";
  // "Lorem ipsum dolor sit amet consectetur. Consequat quam odio nulla eget suspendisse. Phasellus urna gravida vitae urna nibh. Et nisl bibendum faucibus enim sodales at. Est risus ut nulla sit integer est. Senectus fermentum pharetra nisi pellentesque dis sit nec.";

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-14">
      <div className="sm:px-44 py-10">
        <div className="sm:min-h-[740px] sm:h-screen flex justify-center items-center">
          <Image
            src="/projects/vestraFinal.png"
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
            src="/projects/vestra-font1.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px]"
          ></Image>
          <Image
            src="/projects/vestra-font2.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px]"
          ></Image>
          <Image
            src="/projects/vestra-colors.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px]"
          ></Image>
        </div>
      </div>
      <NextProjectSection
        href="/projects/lunaai"
        project="Lúna AI"
      ></NextProjectSection>
    </div>
  );
}
