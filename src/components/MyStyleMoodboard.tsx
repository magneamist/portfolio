import Image from "next/image";

export default function MyStyleMoodboard() {
  return (
    <>
      <Image
        src="/style/myStyle.png"
        width={1000}
        height={1000}
        className="sm:hidden"
        alt=""
      ></Image>
      <div className="max-sm:hidden flex flex-col items-start">
        <div className="h-[390px] w-[605px] relative">
          <Image
            src="/style/whitedress.png"
            width={119}
            height={162}
            className="absolute rounded-2xl top-[12px] left-[142px] hover:scale-110 duration-500"
            alt=""
          ></Image>
          <Image
            src="/style/white-sweater.jpg"
            width={118}
            height={157}
            className="absolute rounded-2xl top-[28px] left-[266px] hover:scale-110 duration-500"
            alt=""
          ></Image>
          <Image
            src="/style/brown-outfit.jpg"
            width={174}
            height={218}
            className="absolute bottom-[30px] left-[159px] rounded-2xl hover:scale-110 duration-500"
            alt=""
          ></Image>
          <Image
            src="/style/white-top.jpg"
            width={125}
            height={188}
            className="rounded-2xl absolute top-0 left-[22px] hover:scale-110 duration-500"
            alt=""
          ></Image>
          <Image
            src="/style/shirt-jeans.jpg"
            width={174}
            height={201}
            className="absolute bottom-[14px] rounded-2xl hover:scale-110 duration-500"
            alt=""
          ></Image>
          <Image
            src="/style/green-sweater.jpg"
            width={159}
            height={199}
            className="absolute bottom-0 right-0 rounded-2xl hover:scale-110 duration-500"
            alt=""
          ></Image>
          <Image
            src="/style/ballerina.png"
            width={130}
            height={160}
            className="absolute top-[12px] right-[103px] rounded-2xl hover:scale-110 duration-500"
            alt=""
          ></Image>
          <Image
            src="/style/yellow-top.jpg"
            width={124}
            height={166}
            className="absolute top-[33px] right-[12px] rounded-2xl hover:scale-110 duration-500"
            alt=""
          ></Image>
          <Image
            src="/style/spickybun.png"
            width={87}
            height={130}
            className="absolute top-[16px] left-[213px] rounded-2xl hover:scale-110 duration-500"
            alt=""
          ></Image>
          <Image
            src="/style/grey-outfit.jpg"
            width={113}
            height={200}
            className="absolute bottom-[18px] right-[137px] rounded-2xl hover:scale-110 duration-500"
            alt=""
          ></Image>
          <Image
            src="/style/white-shirt.png"
            width={73}
            height={78}
            className="absolute top-[129px] right-[83px] rounded-2xl hover:scale-110 duration-500"
            alt=""
          ></Image>
          <Image
            src="/style/blackwhite-sweater.png"
            width={183}
            height={244}
            className="absolute top-[87px] right-[143px] rounded-2xl hover:scale-110 duration-500"
            alt=""
          ></Image>
          <Image
            src="/style/balaclava.png"
            width={121}
            height={164}
            className="absolute bottom-0 right-[205px] rounded-2xl hover:scale-110 duration-500"
            alt=""
          ></Image>
          <Image
            src="/style/green-sweater.png"
            width={78}
            height={88}
            className="absolute top-[115px] left-[132px] rounded-2xl hover:scale-110 duration-500"
            alt=""
          ></Image>
          <Image
            src="/style/hair.png"
            width={115}
            height={205}
            className="absolute bottom-[14px] left-[95px] hover:scale-110 duration-500"
            alt=""
          ></Image>

          <Image
            src="/style/black-messybun.png"
            width={99}
            height={124}
            className="absolute bottom-0 rounded-2xl right-[74px] scaleX(-1)  hover:scale-110 duration-500"
            alt=""
          ></Image>
          <Image
            src="/style/rings.png"
            width={73}
            height={90}
            className="absolute left-[161px] bottom-[107px] rounded-2xl hover:scale-110 duration-500"
            alt=""
          ></Image>
          <Image
            src="/flower-beige.png"
            width={56}
            height={56.95}
            className="absolute left-[12px] bottom-[33px] rounded-2xl hover:scale-110 duration-500"
            alt=""
          ></Image>
          <Image
            src="/flower-beige.png"
            width={56}
            height={56.95}
            className="absolute left-[203px] top-[105px] rounded-2xl hover:scale-110 duration-500"
            alt=""
          ></Image>
          <Image
            src="/flower-beige.png"
            width={56}
            height={56.95}
            className="absolute right-[107px] bottom-[134px] rounded-2xl hover:scale-110 duration-500"
            alt=""
          ></Image>
        </div>
      </div>
    </>
  );
}
