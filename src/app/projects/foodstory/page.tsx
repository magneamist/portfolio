import Image from "next/image";
import Link from "next/link";
import ProjectText from "@/components/ProjectText";
import FoodStoryLayoutPages from "@/components/FoodStoryLayoutPages";

export default function Foodstory() {
  const color = "#FD7463";
  const title = "Food story";
  const year = 2024;
  const duration = "4 weeks";
  const role = ["Branding", "UI/UX design", "Web development"];
  const description =
    "Food Story was a collaborative project where we built a website for users to store all their favorite recipes in one place. The process involved brainstorming, user research, and wireframing, followed by prototyping, user testing, and high-fidelity design. Using the Double Diamond framework, the design was refined through iterations to ensure usability and accessibility. After finalizing the design, we moved on to developing the solution, translating the designs into a fully functional and user-friendly website. The final product was built with a strong focus on UI/UX best practices, color contrast, and typography, resulting in a seamless and intuitive experience";
  // "Food Story was a collaborative project where we designed and developed a website for users to store all their favorite recipes in one place. Using the Double Diamond framework, we conducted user research, brainstorming, wireframing, and high-fidelity design, ensuring a seamless and accessible experience.We balanced design and development tasks, working iteratively through design sprints, testing, and refinements. Our focus was on usability, visual clarity, and a strong style guide with best practices in color contrast and typography. The result is a user-friendly and well-structured platform that makes storing and accessing recipes effortless";
  // "Lorem ipsum dolor sit amet consectetur. Consequat quam odio nulla eget suspendisse. Phasellus urna gravida vitae urna nibh. Et nisl bibendum faucibus enim sodales at. Est risus ut nulla sit integer est. Senectus fermentum pharetra nisi pellentesque dis sit nec.";

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-14">
      <div className="sm:px-44 py-10">
        <div className="sm:min-h-[740px]  sm:h-screen flex justify-center items-center">
          <Image
            src="/projects/foodstory/foodstory.png"
            width={1050}
            height={2000}
            alt="Screenshot of Studio Ghibli project"
            className="rounded-[20px] sm:rounded-[50px]"
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
            src="/projects/foodstory/font1.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px] border-[1px] sm:border-2 border-grey"
          ></Image>

          <Image
            src="/projects/foodstory/font2.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px] border-[1px] sm:border-2 border-grey"
          ></Image>
          <Image
            src="/projects/foodstory/colors1.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px] border-[1px] sm:border-2 border-grey"
          ></Image>
          <Image
            src="/projects/foodstory/colors2.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px] border-[1px] sm:border-2 border-grey"
          ></Image>
          <Image
            src="/projects/foodstory/designSprint1.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px] border-[1px] sm:border-2 border-grey"
          ></Image>
          <FoodStoryLayoutPages />
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
