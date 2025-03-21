import Image from "next/image";
import ProjectText from "@/components/ProjectText";
import FoodStoryLayoutPages from "@/components/FoodStoryLayoutPages";
import NextProjectSection from "@/components/NextProjectSection";

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
    <div className="flex flex-col items-center gap-4 sm:gap-14 w-full">
      <div className="sm:px-44 pt-10 w-full">
        <div className="sm:min-h-[740px] sm:h-screen flex justify-center items-center">
          <Image
            src="/projects/foodstory/foodstory.png"
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
            src="/projects/foodstory/font1.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-3xl sm:rounded-[50px]"
          ></Image>
          <Image
            src="/projects/foodstory/font2.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-3xl sm:rounded-[50px]"
          ></Image>
          <Image
            src="/projects/foodstory/colors1.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-3xl sm:rounded-[50px]"
          ></Image>
          <Image
            src="/projects/foodstory/colors2.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-3xl sm:rounded-[50px]"
          ></Image>
          <Image
            src="/projects/foodstory/designSprint1.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-3xl sm:rounded-[50px]"
          ></Image>
          <FoodStoryLayoutPages />
        </div>
      </div>
      <NextProjectSection
        href="/"
        next="All projects done"
        project="Home"
      ></NextProjectSection>
    </div>
  );
}
