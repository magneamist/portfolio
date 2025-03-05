import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function HomeMarquee() {
  return (
    <div className="flex flex-col">
      <div className="-mx-10">
        <Marquee autoFill={true} pauseOnHover={true}>
          <Image
            src="/home/1-home.jpg"
            width={248}
            height={308}
            className="rounded-2xl mx-2"
            alt=""
          ></Image>
          <Image
            src="/home/lamp.jpg"
            width={308}
            height={308}
            className="rounded-2xl mx-2"
            alt=""
          ></Image>
          <Image
            src="/home/2-home.jpg"
            width={220}
            height={308}
            className="rounded-2xl mx-2"
            alt=""
          ></Image>
          <Image
            src="/home/lamp2.jpg"
            width={275}
            height={308}
            className="rounded-2xl mx-2"
            alt=""
          ></Image>
          <Image
            src="/home/3-home.jpg"
            width={249}
            height={308}
            className="rounded-2xl mx-2"
            alt=""
          ></Image>
          <Image
            src="/home/svefn.png"
            width={230}
            height={308}
            className="rounded-2xl mx-2"
            alt=""
          ></Image>
          <Image
            src="/home/lamp3.jpg"
            width={308}
            height={308}
            className="rounded-2xl mx-2"
            alt=""
          ></Image>
          <Image
            src="/home/4-home.jpg"
            width={205}
            height={308}
            className="rounded-2xl mx-2"
            alt=""
          ></Image>
          <Image
            src="/home/window.jpg"
            width={173}
            height={308}
            className="rounded-2xl mx-2"
            alt=""
          ></Image>
          <Image
            src="/home/greenbed.jpg"
            width={308}
            height={308}
            className="rounded-2xl mx-2"
            alt=""
          ></Image>
        </Marquee>
      </div>
    </div>
  );
}
