import NextProjectSection from "@/components/NextProjectSection";
import Image from "next/image";
import ProjectText from "@/components/ProjectText";

export default function Luna() {
  const color = "#40567A";
  const title = "Lúna AI";
  const year = 2024;
  const duration = "2 weeks";
  const role = ["Branding", "UI/UX design"];
  const description =
    "Lúna AI was a startup idea I developed, aiming to create a chatbot specifically designed to answer questions related to Icelandic legal statutes. The goal was to simplify access to legal information, making it easier for individuals to find relevant laws and regulations quickly and efficiently. I worked on the concept development and design of the chatbot, focusing on creating an intuitive interface and smooth user experience. The chatbot was designed to be easily navigable, providing accurate and accessible legal information at users' fingertips.";
  // "Lorem ipsum dolor sit amet consectetur. Consequat quam odio nulla eget suspendisse. Phasellus urna gravida vitae urna nibh. Et nisl bibendum faucibus enim sodales at. Est risus ut nulla sit integer est. Senectus fermentum pharetra nisi pellentesque dis sit nec.";

  return (
    <div className="flex flex-col items-center gap-14">
      <div className="px-44">
        <div className=" min-h-[740px]  h-screen flex justify-center items-center">
          <Image
            src="/projects/luna/luna.png"
            width={1050}
            height={2000}
            alt="Screenshot of Studio Ghibli project"
            className="rounded-[50px]"
          />
        </div>
        <div className="flex flex-col gap-14">
          <ProjectText
            color={color}
            title={title}
            year={year}
            duration={duration}
            role={role}
            description={description}
          ></ProjectText>
          <Image
            src="/projects/luna/font1.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[50px]"
          ></Image>
          <Image
            src="/projects/luna/font2.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[50px]"
          ></Image>
          <Image
            src="/projects/luna/colors.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[50px]"
          ></Image>

          <div className="flex flex-col items-center gap-6">
            <span className="font-alexandria font-bold text-3xl">
              Landing page
            </span>
            <Image
              src="/projects/luna/home-desktop.png"
              width={1050}
              height={1000}
              alt="Studio Ghibli primary typeface"
              className="rounded-[10px]"
            ></Image>
          </div>
          <div className="flex flex-col items-center gap-6">
            <span className="font-alexandria font-bold text-3xl">
              About page
            </span>
            <Image
              src="/projects/luna/about-desktop.png"
              width={1050}
              height={1000}
              alt="Studio Ghibli primary typeface"
              className="rounded-[10px]"
            ></Image>
          </div>
          <div className="flex flex-col items-center gap-6">
            <span className="font-alexandria font-bold text-3xl">
              User logged in and chat started
            </span>
            <Image
              src="/projects/luna/loggedIn-desktop.png"
              width={1050}
              height={1000}
              alt="Studio Ghibli primary typeface"
              className="rounded-[10px]"
            ></Image>
          </div>
          <div className="flex flex-col items-center gap-6">
            <span className="font-alexandria font-bold text-3xl">
              Create account page
            </span>
            <Image
              src="/projects/luna/createAccount-desktop.png"
              width={1050}
              height={1000}
              alt="Studio Ghibli primary typeface"
              className="rounded-[10px]"
            ></Image>
          </div>
          <div className="flex flex-col items-center gap-6">
            <span className="font-alexandria font-bold text-3xl">
              Reset password page
            </span>
            <Image
              src="/projects/luna/reset-desktop.png"
              width={1050}
              height={1000}
              alt="Studio Ghibli primary typeface"
              className="rounded-[10px]"
            ></Image>
          </div>
          <Image
            src="/projects/luna/mobile.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[50px]"
          ></Image>
        </div>
      </div>
      <NextProjectSection
        href="/projects/studioghibli"
        project="Studio Ghibli"
      ></NextProjectSection>
    </div>
  );
}
