import Image from "next/image";
import Skills from "@/components/Skills";
import ButtonArrow from "@/components/ButtonArrow";
import ContactCard from "@/components/ContactCard";
import ProjectSection from "@/components/ProjectSection";
import TransitionLink from "@/components/TransitionLink";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-14">
        <div className="flex flex-col items-center gap-6 h-screen justify-end ">
          <p className="text-3xl text-center">web designer & developer</p>
          <h1 className="text-fluid text-center w-full whitespace-nowrap">
            Magnea Mist Ólafsdóttir
          </h1>
        </div>
        <div className="grid grid-cols-8  h-[670px] gap-10">
          <div className="bg-green rounded-t-[300px] rounded-b-3xl col-span-3 relative h-[550px] mx-10 flex justify-center hover:scale-105  duration-500 ease-in-out">
            <Image
              src="/Profile.png"
              width={350}
              height={500}
              className="object-contain object-bottom absolute bottom-0"
              alt="Screenshots of the dashboard project showing desktop version"
            ></Image>
          </div>
          <div className="col-span-5 col-start-4 w-full">
            <div className="flex flex-col gap-10">
              <p className="size-body">
                Hi, I’m{" "}
                <TransitionLink href="/moodboards">
                  <span className="font-alexandria hover:font-extrabold hover:text-pink duration-500">
                    Magnea
                  </span>
                </TransitionLink>
                , a web development student with a Bachelor’s in Software
                Engineering, where I’m also honing my skills in web design. My
                passion lies in creating intuitive, visually stunning user
                interfaces that balance creativity with functionality. With a
                strong technical foundation, I design solutions that are
                practical, impactful, and seamless to implement.
                {/* I’m currently
                seeking an internship to grow as a designer and contribute to
                innovative projects. If you’re looking for someone with a blend
                of creativity, attention to detail, and technical expertise, I’d
                love to bring my skills to your team. */}
              </p>
              <ButtonArrow text="See my resume" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen justify-center gap-10 flex flex-col">
        <h2 className="text-center">Skills & services</h2>
        <Skills />
      </div>
      <ProjectSection />
      <ContactCard />
    </div>
  );
}
