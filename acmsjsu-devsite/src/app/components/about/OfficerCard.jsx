import React from 'react'
import Image from 'next/image'
import LinkedIn from '/public/about/linkedin.png'

const OfficerCard = ({ photo, name, position, linkedin}) => {
  return (
    <div className="transition duration-100 ease-in-out hover:shadow-2xl justify-center items-center w-[19rem] h-[rem] border-[2px] gap-2px py-2 text-[16px] sm:text-sm rounded-xl shadow-lg">
      
      <Image src={photo} alt="Officer" width={700} height={1440} className="object-cover items-center justify-center h-60 w-60 m-7 rounded-2xl drop-shadow-lg" />
      <h1 className="font-semibold gap-2 px-7 "><span className="text-xs text-neutral">{position}</span> </h1> 
      <h1 className="font-bold text-lg px-7">{name}</h1>

      <div className="flex items-center px-7 py-5">
        <a href={linkedin} target="_blank"><Image src={LinkedIn} width={50} height={50} className="fill-current text-primary w-3 h-3"/></a>
        <p className='text-sm font-semibold px-2'><span className="text-primary">LinkedIn</span></p>
      </div>
    </div>
    
  )
}

export default OfficerCard