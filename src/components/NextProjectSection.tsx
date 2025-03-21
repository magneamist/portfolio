import Image from "next/image";
import Link from "next/link";

interface NextProjectProps {
  href: string;
  project: string;
  next?: string;
}

export default function NextProjectSection({
  href,
  project,
  next = "Next project",
}: NextProjectProps) {
  return (
    <>
      <div className="max-sm:hidden">
        <div className="w-full sm:h-40 sm:px-44">
          <div className="flex flex-row justify-center items-center">
            <Link href={href} className="group overflow-hidden w-fit">
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
                    {next}{" "}
                  </h3>
                  <p>-</p>
                  <h3 className="font-lora font-extralight text-xl sm:text-4xl">
                    {project}
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="sm:hidden w-full">
        <Link
          href={href}
          className="group flex justify-between items-center py-6"
        >
          <h3 className="font-alexandria text-xl">{next} </h3>
          <div className="flex items-center gap-2">
            <h3 className="font-lora font-extralight text-xl">{project}</h3>
            <Image
              src="/arrow.svg"
              width={24}
              height={24}
              className="h-full text-sand"
              alt="Arrow"
            />
          </div>
        </Link>
      </div>
    </>
  );
}
