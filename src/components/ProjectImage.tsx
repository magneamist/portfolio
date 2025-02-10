import Image from "next/image";

export default function ProjectImage() {
  return (
    <div className="col-span-5">
      <Image
        src="/projects/luna.png"
        width={2000}
        height={2000}
        className="rounded-3xl hidden"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <Image
        src="/projects/vestra.png"
        width={2000}
        height={2000}
        className="rounded-3xl hidden"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <Image
        src="/projects/studioGhibli.png"
        width={2000}
        height={2000}
        className="rounded-3xl hidden"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <Image
        src="/projects/foodstory.png"
        width={2000}
        height={2000}
        className="rounded-3xl hidden"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <Image
        src="/projects/bigPortfolioBetter.png"
        width={2000}
        height={2000}
        className="rounded-3xl hidden"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
  );
}
