import Image from "next/image";

export default function Project({
  project,
  projectType,
}: {
  project: string;
  projectType: string;
}) {
  return (
    <div className="pb-2 sm:pb-4">
      <div className="flex flex-row justify-between items-end">
        <div className="pb-1 overflow-hidden w-fit">
          {/*  relative flex flex-row justify-between items-center pb-1 */}
          <div className=" flex items-center gap-3 sm:-translate-x-11 sm:duration-300 sm:group-hover:translate-x-0">
            <Image
              src="/arrow.svg"
              width={32}
              height={32}
              className="h-6 w-6 sm:h-8 sm:w-8 text-sand max-sm:hidden"
              alt="Arrow"
            />
            <p className="text-xl sm:text-4xl whitespace-nowrap">{project}</p>
          </div>
        </div>
        <p className="text-lg text-right truncate sm:text-2xl font-alexandria font-extralight">
          {projectType}
        </p>
      </div>
      {/* <hr className="border-foreground rounded-md" /> */}
    </div>
  );
}
