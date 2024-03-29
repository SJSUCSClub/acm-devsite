import Image from "next/image";

const TextWithImage = ({
  children,
  reverse = false,
  logo = false,
  imagePath,
  imageAlt,
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-4 lg:gap-16 ${
        reverse ? "lg:flex-row-reverse lg:text-right" : ""
      }`}
    >
      <div className="space-y-4 shrink">{children}</div>
      <div
        className={`relative  h-[222px] ${
          logo ? "min-w-[165px]" : "min-w-[330px] shadow-xl"
        }`}
      >
        <Image
          src={imagePath}
          fill
          alt={imageAlt}
          className={`rounded-lg object-${logo ? "contain" : "cover"}`}
        />
      </div>
    </div>
  );
};

export default TextWithImage;
