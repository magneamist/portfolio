import Image from "next/image";
import NextProjectSection from "@/components/NextProjectSection";
import ProjectText from "@/components/ProjectText";

export default function MagneaMist() {
  const color = "#AE514B";
  const title = "Magnea Mist";
  const year = 2025;
  const duration = "4 weeks";
  const role = ["Branding", "UI/UX design", "Web development"];
  const description =
    "Lorem ipsum dolor sit amet consectetur. Consequat quam odio nulla eget suspendisse. Phasellus urna gravida vitae urna nibh. Et nisl bibendum faucibus enim sodales at. Est risus ut nulla sit integer est. Senectus fermentum pharetra nisi pellentesque dis sit nec.";

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-14 w-full">
      <div className="sm:px-44 py-10 w-full">
        <div className="sm:min-h-[740px] sm:h-screen flex justify-center items-center">
          <Image
            src="/projects/portfolio.png"
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
            src="/projects/mmo-font1.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px] border-[1px] sm:border-2 border-grey"
          ></Image>
          <Image
            src="/projects/mmo-font2.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px] border-[1px] sm:border-2 border-grey"
          ></Image>
          <Image
            src="/projects/mmo-colors1.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px] border-[1px] sm:border-2 border-grey"
          ></Image>
          <Image
            src="/projects/mmo-colors2.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px] border-[1px] sm:border-2 border-grey"
          ></Image>
          <Image
            src="/projects/mmo-color-combo.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px] border-[1px] sm:border-2 border-grey"
          ></Image>
        </div>
      </div>
      <NextProjectSection
        href="/projects/vestra"
        project="Vestra"
      ></NextProjectSection>
    </div>
  );
}
