import Image from "next/image";
import LinkedIn from "/public/about/yellowLinkedIn.png";

export interface Officer {
  pfp: string;
  name: string;
  position?: string;
  linkedin?: string;
}

const OfficerCard: React.FC<Officer> = ({
  pfp,
  name,
  position = null,
  linkedin = null,
}) => {
  return (
    <div className="transition duration-100 ease-in-out hover:shadow-2xl justify-center items-center w-[19rem] h-[rem] border-[2px] space-y-3 p-10 text-[16px] sm:text-sm rounded-xl shadow mb-10">
      <Image
        src={pfp}
        alt="Officer"
        width={700}
        height={1440}
        className="object-cover items-center justify-center h-60 w-60 mx-auto rounded-2xl drop-shadow-lg"
      />
      <div className="text-center">
        {position && (
          <h1 className="font-semibold gap-2 px-7 text-sm">{position}</h1>
        )}
        <h1 className="font-bold text-lg">{name}</h1>
      </div>

      {linkedin && (
        <div className="flex justify-start items-center w-full px-7 py-5">
          <a
            className="flex items-center no-underline"
            href={linkedin}
            target="_blank"
          >
            <Image src={LinkedIn} width={16} height={16} alt="LinkedIn" />
            <div className="text-sm font-semibold px-2">
              <span className="text-primary">LinkedIn</span>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default OfficerCard;
