import Image from "next/image";
import Link from "next/link";

interface NextProjectProps {
  href: string;
  project: string;
}

export default function NextProjectSection(Props: NextProjectProps) {
  return (
    <div className="w-full sm:h-40 sm:px-44">
      <div className="flex flex-row justify-center items-center">
        <Link href={Props.href} className="group overflow-hidden w-fit">
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
                Next project{" "}
              </h3>
              <p>-</p>
              <h3 className="font-lora font-extralight text-xl sm:text-4xl">
                {Props.project}
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
