import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-400 text-center bottom-0 w-full relative p-10">
      <div className="w-full h-px bg-black my-30"></div>
      <img className="h-20 ml-60 mt-5 absolute" src="/Logo.png" alt="image of logo" />
      <p className="mt-10">
        ROOM MQH 227, SAN JOSE STATE UNIVERSITY 1 WASHINGTON SQ, SAN JOSE, CA
        95192
      </p>
      <p>ACM-CS AT SJSU &#169; 2024</p>
      <a href="https://discord.gg/4cXE636ax4" target="blank"><img className="h-8 bottom-10 right-20 mr-20 absolute" src="/Discord Bubble.png" alt="discord image"/></a>
      <a href="https://www.instagram.com/sjsuacm/" target="blank"><img className="h-8 bottom-10 right-10 mr-20 absolute" src="/Instagram.png" alt="instagram image"/></a>
      <a href="https://www.linkedin.com/company/sjsu-computer-science-club/about/" target="blank"><img className="h-8 bottom-10 right-0 mr-20 absolute" src="/Linkedin.png" alt="linkedin image"/></a>
      
      
    </footer>
  );
};

export default Footer;
