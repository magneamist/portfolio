import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function FamMarquee() {
  const imageList = [
    "/fam/barbie.jpg",
    "/fam/bbg.jpg",
    "/fam/bath.png",
    "/fam/dogs.png",
    "/fam/gogntur.jpg",
    "/fam/fam.png",
    "/fam/girls.jpg",
    "/fam/kellingar.png",
    "/fam/kisi.png",
    "/fam/knus.jpg",
    "/fam/maogpa.jpg",
    "/fam/mateikna.png",
    "/fam/mosiogpiano.png",
    "/fam/namibia.jpg",
    "/fam/skydive.jpg",
    "/fam/solbad.png",
    "/fam/tumi.png",
  ];

  return (
    <div className="-mx-10">
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
