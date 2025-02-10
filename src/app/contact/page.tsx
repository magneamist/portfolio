import Link from "next/link";

export default function Contact() {
  return (
    <div className="h-screen relative justify-center w-full flex flex-col items-center">
      <div className="flex flex-col gap-6">
        <Link
          href="mailto:magneamist@gmail.com"
          className="font-lora font-light text-4xl hover:text-pink  "
        >
          magneamist@gmail.com
        </Link>
        <Link
          href="tel:+3548581470"
          className="font-lora font-light text-4xl hover:text-pink"
        >
          +354 8581470
        </Link>
      </div>
      <div className="absolute left-0 bottom-6">
        <h1 className="font-alexandria text-left sm:text-left">Contact</h1>
      </div>
    </div>
  );
}
