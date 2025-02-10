import Image from "next/image";
import NextProjectSection from "@/components/NextProjectSection";

export default function MagneaMist() {
  return (
    <div className="flex flex-col items-center gap-14">
      <div className="px-44">
        <div className=" min-h-[740px]  h-screen flex justify-center items-center">
          <Image
            src="/projects/portfolio.png"
            width={1050}
            height={2000}
            alt="Screenshot of Studio Ghibli project"
            className="rounded-[50px]"
          />
        </div>
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-6 py-14">
            <div className="">
              <h1 className="text-8xl pb-4 text-sg-red">Magnea Mist</h1>
              <hr className="border-2 rounded-full border-foreground" />
            </div>
            <div className="flex flex-row gap-6">
              <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col gap-3 ">
                  <p className="font-alexandria text-sg-red leading-6">Year</p>
                  <p className=" leading-6">2024</p>
                </div>
                <div className="flex flex-col gap-3 ">
                  <p className="font-alexandria text-sg-red leading-6">
                    Project duration
                  </p>
                  <p className=" leading-6">8 hours</p>
                </div>
                <div className="flex flex-col gap-3 ">
                  <p className="font-alexandria text-sg-red leading-6">Role</p>
                  <p className="leading-6">Branding</p>
                  <p className="leading-6">UI/UX design</p>
                  <p className="leading-6">Web development</p>
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
            src="/projects/mmo-font1.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[50px] border-2 border-grey"
          ></Image>
          <Image
            src="/projects/mmo-font2.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[50px] border-2 border-grey"
          ></Image>
          <Image
            src="/projects/mmo-colors1.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[50px] border-2 border-grey"
          ></Image>
          <Image
            src="/projects/mmo-colors2.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[50px] border-2 border-grey"
          ></Image>
          <Image
            src="/projects/mmo-color-combo.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[50px] border-2 border-grey"
          ></Image>
        </div>
      </div>
      <NextProjectSection
        href="/projects/vestra"
        project="Vestra"
      ></NextProjectSection>
    </div>
  );
}
