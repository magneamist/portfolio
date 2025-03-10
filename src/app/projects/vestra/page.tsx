import NextProjectSection from "@/components/NextProjectSection";
import Image from "next/image";
import ProjectText from "@/components/ProjectText";

export default function Vestra() {
  const color = "#7CE37F";
  const title = "Vestra";
  const year = 2024;
  const duration = "2 weeks";
  const role = ["Branding", "UI/UX design"];
  const description =
    "Vestra.is is a startup focused on AI-powered web solutions. They had an existing website, but it lacked a polished look and user-friendly experience. My role was to revamp their branding and UI/UX design. I introduced a sharper, more distinctive color palette, redesigned the interface for better usability, and created their new logo to establish a stronger visual identity.";

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
