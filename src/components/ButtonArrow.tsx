import Image from "next/image";
import Link from "next/link";

export default function ButtonArrow({ text }: { text: string }) {
  return (
    <Link
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden w-fit "
    >
      <div className="flex items-center gap-3 translate-x-0 sm:-translate-x-11 duration-300 group-hover:translate-x-0">
        <Image
          src="/arrow.svg"
          width={32}
          height={32}
          className="h-full text-sand max-sm:hidden"
          alt="Arrow"
        />
        <p className="max-sm:text-xl bg-pink sm:bg-transparent border-2 border-pink   sm:border-none sm:p-0 px-5 py-2 rounded-full">
          {text}
        </p>
      </div>
    </Link>
  );
}
