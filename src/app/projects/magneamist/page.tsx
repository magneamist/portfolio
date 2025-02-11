import Image from "next/image";
import NextProjectSection from "@/components/NextProjectSection";

export default function MagneaMist() {
  return (
    <div className="flex flex-col items-center gap-4 sm:gap-14">
      <div className="sm:px-44 py-10">
        <div className="sm:min-h-[740px] sm:h-screen flex justify-center items-center">
          <Image
            src="/projects/portfolio.png"
            width={1050}
            height={2000}
            alt="Screenshot of Studio Ghibli project"
            className="rounded-[50px]"
          />
        </div>
        <div className="flex flex-col gap-3 sm:gap-14">
          <div className="flex flex-col gap-6 py-6 sm:py-14">
            <div className="">
              <h1 className="text-4xl text-center sm:text-left sm:text-8xl pb-4 text-sg-red">
                Magnea Mist
              </h1>
              <hr className="border-[1px] sm:border-2 rounded-full border-foreground" />
            </div>
            <div className="flex flex-col sm:flex-row gap-12">
              <div className="flex flex-col items-center sm:items-start justify-center sm:justify-start text-center sm:text-left gap-8 w-full">
                <div className="flex flex-col gap-3">
                  <p className="font-alexandria font-semibold text-sg-red leading-6">
                    Year
                  </p>
                  <p className=" leading-6">2024</p>
                </div>
                <div className="flex flex-col gap-3 ">
                  <p className="font-alexandria font-semibold text-sg-red leading-6">
                    Project duration
                  </p>
                  <p className=" leading-6">8 hours</p>
                </div>
                <div className="flex flex-col gap-3 ">
                  <p className="font-alexandria font-semibold text-sg-red leading-6">
                    Role
                  </p>
                  <p className="leading-6">Branding</p>
                  <p className="leading-6">UI/UX design</p>
                  <p className="leading-6 whitespace-nowrap">Web development</p>
                </div>
              </div>
              <p className="text-center sm:text-left">
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
            className="rounded-[20px] sm:rounded-[50px] border-2 border-grey"
          ></Image>
          <Image
            src="/projects/mmo-font2.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px] border-2 border-grey"
          ></Image>
          <Image
            src="/projects/mmo-colors1.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px] border-2 border-grey"
          ></Image>
          <Image
            src="/projects/mmo-colors2.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px] border-2 border-grey"
          ></Image>
          <Image
            src="/projects/mmo-color-combo.png"
            width={1050}
            height={1000}
            alt="Studio Ghibli primary typeface"
            className="rounded-[20px] sm:rounded-[50px] border-2 border-grey"
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
