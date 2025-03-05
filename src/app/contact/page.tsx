import Link from "next/link";

export default function Contact() {
  return (
    <div className="h-screen relative justify-center w-full flex flex-col gap-6 items-center">
      <div className="sm:hidden flex justify-center items-center">
        <h1 className="font-alexandria text-left text-5xl">Contact</h1>
      </div>
      <div className="flex flex-col gap-6 text-center">
        <Link
          href="mailto:magneamist@gmail.com"
          className="font-lora font-light text-2xl sm:text-4xl hover:text-pink  "
        >
          magneamist@gmail.com
        </Link>
        <Link
          href="tel:+3548581470"
          className="font-lora font-light text-2xl sm:text-4xl hover:text-pink"
        >
          +354 8581470
        </Link>
      </div>
      <div className="hidden sm:block absolute left-0 bottom-0">
        <h1 className="font-alexandria sm:text-left">Contact</h1>
      </div>
    </div>
  );
}
