import Image from "next/image";
import Link from "next/link";
import ProjectText from "@/components/ProjectText";

export default function Foodstory() {
  const color = "#FD7463";
  const title = "Food story";
  const year = 2024;
  const duration = "4 weeks";
  const role = ["Branding", "UI/UX design", "Web development"];
  const description =
    "Lorem ipsum dolor sit amet consectetur. Consequat quam odio nulla eget suspendisse. Phasellus urna gravida vitae urna nibh. Et nisl bibendum faucibus enim sodales at. Est risus ut nulla sit integer est. Senectus fermentum pharetra nisi pellentesque dis sit nec.";

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-14">
      <div className="sm:px-44 py-10">
        <div className="sm:min-h-[740px]  sm:h-screen flex justify-center items-center">
          <Image
            src="/projects/foodstory.png"
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
            src="/projects/sg-font.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px] border-[1px] sm:border-2 border-grey"
          ></Image>
        </div>
      </div>
      <div className="w-full sm:h-40 sm:px-44">
        <div className="flex flex-row justify-center sm:justify-end  items-center">
          <Link href="/" className="group overflow-hidden w-fit">
            <div className="flex items-center gap-3 -translate-x-11 duration-300 group-hover:translate-x-0">
              <Image
                src="/arrow.svg"
                width={32}
                height={32}
                className="h-full text-sand"
                alt="Arrow"
              />
              <div className="flex flex-row gap-3 justify-center items-center">
                <h3 className="font-alexandria text-xl sm:text-4xl">
                  Homepage
                </h3>
                <p>-</p>
                <h3 className="font-lora font-extralight text-xl sm:text-4xl whitespace-nowrap">
                  All projects done
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
