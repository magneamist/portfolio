import Image from "next/image";
import Link from "next/link";

interface NextProjectProps {
  href: string;
  project: string;
}

export default function NextProjectSection(Props: NextProjectProps) {
  return (
    <div className="w-full h-40 px-44">
      <div className="flex flex-row justify-end  items-center">
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
              <h3 className="font-alexandria">Next project </h3>
              <p>-</p>
              <h3 className="font-lora font-extralight ">{Props.project}</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
