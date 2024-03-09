import React from "react";
import Image from "next/image";
import LinkedIn from "/public/about/yellowLinkedIn.png";

const OfficerCard = ({ photo, name, position, linkedin }) => {
  return (
    <div className="transition duration-100 ease-in-out hover:shadow-2xl flex flex-col justify-start items-start w-full sm:w-[19rem] border-[2px] py-2 text-[16px] sm:text-sm rounded-xl shadow-lg">
      <Image
        src={photo}
        alt="Officer"
        width={700}
        height={1440}
        className="object-cover h-60 w-full sm:w-60 m-7 rounded-2xl drop-shadow-lg"
      />
      <h1 className="font-semibold text-xs text-neutral px-7">{position}</h1>
      <h1 className="font-bold text-lg px-7">{name}</h1>

      <div className="flex justify-start items-center w-full px-7 py-5">
        <a
          className="flex items-center no-underline"
          href={linkedin}
          target="_blank"
        >
          <Image src={LinkedIn} width={50} height={50} className="w-3 h-3" />
          <div className="text-sm font-semibold px-2">
            <span className="text-primary">LinkedIn</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default OfficerCard;
