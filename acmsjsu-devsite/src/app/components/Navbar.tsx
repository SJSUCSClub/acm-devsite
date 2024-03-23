import React from "react";
import Link from "next/link";
import Logo from '/public/Logo.png'
import Image from 'next/image'
import LinkCard from './LinkCard'

const Navbar = () => {
  return (
    <div className="navbar bg-white border-b-4 px-24 sm:px-6 py-3 sm:py-2 sticky flex justify-center w-[100vw] z-10 top-0 left-0 right-0">
     
        <a href="/" className='mr-auto'>
          <Image src={Logo} alt="Logo" width={100} height={90} quality={100} className="sm:h-auto" unoptimized />
        </a>
 
      <div className="flex gap-4 items-center justify-center">
        
        <LinkCard path="/about" pathName="About Us" />
        <LinkCard path="/eventspage" pathName="Events" />
        <LinkCard path="/blog" pathName="Contact"/>
         
      </div>
    </div>
  );
};
export default Navbar;