import Image from "next/image";

import RightArrow from "/public/about/rightarrow.svg";

const LinkButton = ({ text, destination }) => {
  return (
    <button className="bg-primary py-2 px-4 rounded-full border border-border border-2 hover:border-border-hovered">
      <a
        href={destination}
        target="_blank"
        className="flex gap-3 no-underline font-bold"
      >
        <span className="text-white"> {Text} </span>
        <Image src={RightArrow} alt="right arrow" />
      </a>
    </button>
  );
};

export default MemberButton;
