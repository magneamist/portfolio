import React from "react";
import Image from "next/image";

export default function Nominations() {
  return (
    <div className="sm:h-screen flex flex-col items-center sm:justify-center sm:items-center gap-4 sm:gap-14 pb-36">
      <h2 className="text-4xl sm:text-[64px]">Nominations</h2>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Image
          src="../svef.svg"
          width={200}
          height={300}
          className="max-sm:hidden"
          alt="The Icelandic Web Awards logo"
        ></Image>
        <div className="flex flex-col items-center sm:items-start gap-2">
          <p className="text-xl text-center sm:text-4xl">
            The Icelandic Web Awards 2025
          </p>
          <p className="font-extralight font-alexandria text-lg sm:text-2xl">
            Student project of the year
          </p>
        </div>
      </div>
    </div>
  );
}
