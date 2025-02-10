import Image from "next/image";

export default function ButtonArrow({ text }: { text: string }) {
  return (
    <button className="group overflow-hidden w-fit">
      <div className="flex items-center gap-3 translate-x-0 sm:-translate-x-11 duration-300 group-hover:translate-x-0">
        <Image
          src="/arrow.svg"
          width={32}
          height={32}
          className="h-full text-sand max-sm:hidden"
          alt="Arrow"
        />
        <p className="max-sm:text-xl border-2 border-pink sm:border-none sm:p-0 px-5 py-2 rounded-full">
          {text}
        </p>
      </div>
    </button>
  );
}
