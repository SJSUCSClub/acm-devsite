import Link from "next/link";
import Image from "next/image"
const SpotLightCard = ({type, image, title, id, description}: any) => {
  return (
    <div className="flex-none grid grid-cols-2 gap-5 p-5 place-items-center bg-white h-[300px] w-[800px] rounded-lg shadow-lg transition ease-in-out hover:shadow-xl ">
     <div className= " w-[100%] h-auto">
         <Image src={image} width={200} height={100} className="w-[100%] h-auto" alt={""}/>
     </div>
     <div className= "text-balance text-left">
       
        <h1 className="font-bold text-xs pb-1 text-gray-500">{type}</h1> 
        <h1 className="font-bold text-m pb-3">{title}</h1> 
        <h3 className="text-wrap text-sm pb-3 ">
          {description}
          </h3>
              
     </div>
    
    </div>
  );
};

export default SpotLightCard;
