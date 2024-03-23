import Link from "next/link";
import Image from "next/image"
const SpotLightCard = ({type, image, title, id, description}) => {
  return (
    <div className="flex-none p-5 grid grid-cols-2 place-items-center gap-5 bg-white rounded-lg shadow-lg transition ease-in-out hover:shadow-xl ">
     <div className= "flex justify-center items-center h-[200px] w-[300px] bg-red-100">

        <img src={image} alt={title} className="h-[200px] w-[300px] rounded-lg" />
     </div>
     <div className= "flex-shrink w-[300px] h-[200px] text-balance self-start text-left">
       
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
