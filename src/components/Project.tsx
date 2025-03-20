import Image from "next/image";

export default function Project({
  project,
  projectType,
}: {
  project: string;
  projectType: string;
}) {
  return (
    <div className="pb-4">
      <div className="flex flex-row justify-between items-end">
        <div className="pb-1 overflow-hidden w-fit">
          {/*  relative flex flex-row justify-between items-center pb-1 */}
          <div className="flex items-center gap-3 -translate-x-11 duration-300 group-hover:translate-x-0">
            <Image
              src="/arrow.svg"
              width={32}
              height={32}
              className="h-full text-sand"
              alt="Arrow"
            />
            <p className="text-2xl sm:text-4xl whitespace-nowrap">{project}</p>
          </div>
        </div>
        <p className="text-base text-right truncate sm:text-2xl font-alexandria font-extralight">
          {projectType}
        </p>
      </div>
      {/* <hr className="border-foreground rounded-md" /> */}
    </div>
  );
}
