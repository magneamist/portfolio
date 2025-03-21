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
    "Designing and developing my own portfolio website was both a challenge and an opportunity to showcase my skills. I focused on creating a sleek, responsive, and user-friendly experience that reflects my style as a frontend developer and web designer. This site is a testament to my expertise in modern web technologies and clean UI/UX design.";

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-14 w-full">
      <div className="sm:px-44 pt-10 w-full">
        <div className="sm:min-h-[740px] sm:h-screen flex justify-center items-center">
          <Image
            src="/projects/magneamist/portfolio.png"
            width={1050}
            height={2000}
            alt="Screenshot of Studio Ghibli project"
            className="rounded-3xl sm:rounded-[50px]"
          />
        </div>
        <div className="flex flex-col gap-8 sm:gap-14">
          <ProjectText
            color={color}
            title={title}
            year={year}
            duration={duration}
            role={role}
            description={description}
          ></ProjectText>
          <Image
            src="/projects/magneamist/font1.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-3xl sm:rounded-[50px] border-[1px] sm:border-2 border-grey"
          ></Image>
          <Image
            src="/projects/magneamist/font2.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-3xl sm:rounded-[50px] border-[1px] sm:border-2 border-grey"
          ></Image>
          <Image
            src="/projects/magneamist/colors1a.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-3xl sm:rounded-[50px] border-[1px] sm:border-2 border-grey"
          ></Image>
          <Image
            src="/projects/magneamist/colors2.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-3xl sm:rounded-[50px] border-[1px] sm:border-2 border-grey"
          ></Image>
          <Image
            src="/projects/magneamist/colorCombo.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-3xl sm:rounded-[50px] border-[1px] sm:border-2 border-grey"
          ></Image>
          <Image
            src="/projects/magneamist/techStack.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-3xl sm:rounded-[50px] border-[1px] sm:border-2 border-grey"
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
