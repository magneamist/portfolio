import Image from "next/image";
import ButtonArrow from "@/components/ButtonArrow";
import Link from "next/link";

export default function StudioGhibli() {
  return (
    <div className="flex flex-col items-center gap-14">
      <div className="px-44">
        <div className=" min-h-[740px]  h-screen flex justify-center items-center">
          <Image
            src="/projects/studioGhibli.png"
            width={1050}
            height={2000}
            alt="Screenshot of Studio Ghibli project"
            className="rounded-[50px]"
          />
        </div>
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-6 py-14">
            <div className="">
              <h1 className="text-8xl pb-4 text-sg-red">Studio Ghibli Films</h1>
              {/* <hr className="border-2 rounded-full border-foreground" /> */}
            </div>
            <div className="flex flex-row gap-6">
              <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col gap-3 ">
                  <p className="font-alexandria text-sg-red leading-6">Year</p>
                  <p className="font-light leading-6">2024</p>
                </div>
                <div className="flex flex-col gap-3 ">
                  <p className=" font-alexandria text-sg-red leading-6">
                    Project duration
                  </p>
                  <p className="font-light leading-6">8 hours</p>
                </div>
                <div className="flex flex-col gap-3 ">
                  <p className="font-alexandria text-sg-red leading-6">Role</p>
                  <p className=" font-light leading-6">Redesign</p>
                  <p className=" font-light leading-6">UI/UX design</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Consequat quam odio
                nulla eget suspendisse. Phasellus urna gravida vitae urna nibh.
                Et nisl bibendum faucibus enim sodales at. Est risus ut nulla
                sit integer est. Senectus fermentum pharetra nisi pellentesque
                dis sit nec.
              </p>
            </div>
          </div>
          <Image
            src="/projects/sg-font.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[50px] border-2 border-grey"
          ></Image>
          <Image
            src="/projects/sg-font2.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[50px] border-2 border-grey"
          ></Image>
          <Image
            src="/projects/sg-color1.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[50px] border-2 border-grey"
          ></Image>
          <Image
            src="/projects/sg-color2.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[50px] border-2 border-grey"
          ></Image>
        </div>
      </div>
      <div className="flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-6">
          <h3>
            <span className="text-sg-red">Old</span> landing page
          </h3>
          <Image
            src="/projects/studioghibliwebpage.jpg"
            width={1050}
            height={5000}
            alt="Studio Ghibli primary typeface"
            className="rounded-3xl"
          ></Image>
        </div>
        <div className="flex flex-col items-center gap-6">
          <h3>
            <span className="text-sg-red">New</span> landing page
          </h3>
          <Image
            src="/projects/MyStudioGhibli.png"
            width={1050}
            height={5000}
            alt="Studio Ghibli primary typeface"
            className="rounded-3xl"
          ></Image>
        </div>
      </div>
      <div className="w-full h-40 px-44">
        <div className="flex flex-row justify-end  items-center">
          <Link
            href="/projects/foodstory"
            className="group overflow-hidden w-fit"
          >
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
                <h3 className="font-lora font-extralight ">Food story</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
