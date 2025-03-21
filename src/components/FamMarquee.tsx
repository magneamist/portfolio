import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function FamMarquee() {
  const imageList = [
    "/fam/bath.png",
    "/fam/bbg1.jpg",
    "/fam/dogs.png",
    "/fam/fam.png",
    "/fam/kellingar.png",
    // "/fam/kisi.png",
    "/fam/knus1.jpg",
    // "/fam/maogpa1.jpg",
    // "/fam/solbad.png",
    // "/fam/namibia1.jpg",
    "/fam/skydive1.jpg",
    "/fam/girls.jpg",
    "/fam/mateikna.png",
    "/fam/mosiogpiano.png",
    "/fam/gogntur1.jpg",
    "/fam/barbie1.jpg",
    "/fam/tumi.png",
  ];

  return (
    <div className="-mx-4 sm:-mx-10">
      <Marquee
        autoFill={true}
        pauseOnHover={true}
        direction="right"
        className="h-[308px]"
      >
        {imageList.map((imageSrc, index) => (
          <div
            key={index}
            className="relative h-[308px] mx-2 flex items-center justify-center"
          >
            <div className="relative h-full">
              <Image
                src={imageSrc}
                alt={`Family memory ${index + 1}`}
                style={{
                  height: "100%",
                  width: "auto",
                  objectFit: "contain",
                }}
                width={500}
                height={500}
                className="rounded-2xl"
              />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
