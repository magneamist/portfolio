"use client";
import TransitionLink from "./TransitionLink";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Breyttu 768 í þinn eigin breakpoint
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Keyrir þegar component er first renderað

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {isMobile ? (
        <Sheet>
          <SheetTrigger className="fixed top-4 right-4 z-40">
            <div className="bg-background/50 rounded-lg backdrop-blur-sm p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </SheetTrigger>
          <SheetContent className="w-screen flex items-center justify-center ">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <nav className="text-center z-50">
              <ul className="flex flex-col gap-10">
                <li>
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className=" text-5xl font-bold transition-colors duration-300"
                    >
                      Home
                    </Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link
                      href="/projects"
                      className=" text-5xl font-bold transition-colors duration-300"
                    >
                      Projects
                    </Link>
                  </SheetClose>
                </li>
                <li className="">
                  <SheetClose asChild>
                    <Link
                      href="/contact"
                      className=" text-5xl font-bold transition-colors duration-300"
                    >
                      Contact
                    </Link>
                  </SheetClose>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      ) : (
        <nav className="hidden sm:flex space-x-4 bg-background/50 rounded-3xl backdrop-blur-sm fixed right-10 top-10 py-2.5 px-5 z-50">
          <TransitionLink
            href="/"
            className="font-lora text-xl hover:underline"
          >
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
          {/* <div className="flex flex-row gap-1">
            <Image
              src="../globe.svg"
              width={20}
              height={20}
              alt="Screenshots of the dashboard project showing desktop version"
            ></Image>
            <p className="font-lora text-xl">EN</p>
          </div> */}
        </nav>
      )}
    </>
  );
}
