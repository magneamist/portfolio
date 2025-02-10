import Link from "next/link";

export default function ContactCard() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-row items-end justify-center gap-20">
        <div className="flex flex-col">
          <h3>Think we are a good match?</h3>
          <p className="text-pink">Get in touch!</p>
        </div>
        <div className="flex flex-row gap-20">
          <Link
            href="mailto:magneamist@gmail.com"
            className="font-lora font-light text-2xl hover:text-pink duration-300"
          >
            magneamist@gmail.com
          </Link>
          <Link
            href="tel:+3548581470"
            className="font-lora font-light text-2xl hover:text-pink duration-300"
          >
            +354 8581470
          </Link>
        </div>
      </div>
    </div>
  );
}
