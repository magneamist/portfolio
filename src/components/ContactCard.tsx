import Link from "next/link";

export default function ContactCard() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col sm:flex-row sm:items-end justify-center gap-10 sm:gap-20">
        <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-5">
          <h3 className="text-2xl text-center sm:text-left sm:text-[40px]">
            Think we are a good match?
          </h3>
          <Link href="mailto:magneamist@gmail.com">
            <p className="text-pink text-xl sm:text-2xl">Get in touch!</p>
          </Link>
        </div>
        <div className="flex flex-col gap-5 items-center sm:items-start sm:flex-row sm:gap-20 ">
          <Link
            href="mailto:magneamist@gmail.com"
            className="font-lora font-light text-xl sm:text-2xl hover:text-pink duration-300"
          >
            magneamist@gmail.com
          </Link>
          <Link
            href="tel:+3548581470"
            className="font-lora font-light text-xl sm:text-2xl hover:text-pink duration-300"
          >
            +354 8581470
          </Link>
        </div>
      </div>
    </div>
  );
}
