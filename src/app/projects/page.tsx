import ProjectSection from "@/components/ProjectSection";

export default function Projects() {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-left gap-6 h-screen sm:justify-end justify-center">
          <h1 className="font-alexandria sm:text-left text-center w-full text-5xl sm:text-[112px] sm:pb-4">
            Projects
          </h1>
        </div>
      </div>
      <div className="h-screen flex justify-center items-center">
        <ProjectSection />
      </div>
      {/* <div className="flex flex-row gap-10 justify-between">
        <div className="w-[900px] h-[715px] bg-foreground rounded-t-3xl"></div>
        <div>
          <div className="flex flex-row w-[456px] justify-between items-end align self-stretch">
            <p className="text-4xl ">magneamist.is</p>
            <p className="text-2xl">portfolio</p>
          </div>
          <hr className="py-2" />
        </div>
      </div> */}
    </div>
  );
}
