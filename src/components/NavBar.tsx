import Image from "next/image";
import Link from "next/link";
import TransitionLink from "./TransitionLink";

export default function NavBar() {
  return (
    <nav className="flex space-x-4 bg-background/50 rounded-3xl backdrop-blur-sm fixed right-10 top-10 py-2.5 px-5 z-50">
      <TransitionLink href="/" className="font-lora text-xl hover:underline">
        Home
      </TransitionLink>
      <TransitionLink
        href="/projects"
        className="font-lora text-xl hover:underline"
      >
        Projects
      </TransitionLink>
      <TransitionLink
        href="/contact"
        className="font-lora text-xl hover:underline"
      >
        Contact
      </TransitionLink>
      <div className="flex flex-row gap-1">
        <Image
          src="/globe.svg"
          width={20}
          height={20}
          alt="Screenshots of the dashboard project showing desktop version"
        ></Image>
        <p className="font-lora text-xl">EN</p>
      </div>
    </nav>
  );
}
