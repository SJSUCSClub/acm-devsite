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
      className={`flex items-center gap-16 ${
        reverse ? "flex-row-reverse text-right" : ""
      }`}
    >
      <div className="space-y-4 shrink">{children}</div>
      <div
        className={`relative  h-[222px] ${
          logo ? "min-w-[175px]" : "min-w-[330px] shadow-xl"
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