import React from "react";
import Image from "next/image"
import Logo from '/public/Logo.png'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-400 text-center bottom-0 w-full grid grid-cols-3 grid-rows-1 place-content-center p-5">
      <Image src={Logo} alt="Logo" width={100}  quality={100} className="sm:h-auto" unoptimized />
      <div className="text-center place-content-center">
          <p className="text-center text-sm">
            ROOM MQH 227, SAN JOSE STATE UNIVERSITY 1 WASHINGTON SQ, SAN JOSE, CA
            95192
          </p>

          <p className="text-center pt-2 text-sm">ACM-CS AT SJSU &#169; 2024</p>
      </div>
     <div className=" gap-3 grid-cols-3 flex grid-rows-1 self-center justify-end">
      <a href="https://discord.gg/4cXE636ax4" target="blank">
          <img
            className="sm:w-8"
            src="/icons/discord.svg"
            alt="discord image"
          />
        </a>
        <a href="https://www.instagram.com/sjsuacm/" target="blank">
          <img
            className="sm:w-8"
            src="/icons/Instagram.svg"
            alt="instagram image"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/sjsu-computer-science-club/about/"
          target="blank"
        >
          <img
            className="sm:w-8"
            src="/icons/logo2.svg"
            alt="linkedin image"
          />
        </a>
     </div>
     
    </footer>
  );
};

export default Footer;
