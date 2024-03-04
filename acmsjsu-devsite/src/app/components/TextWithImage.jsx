import Image from "next/image";

const TextWithImage = ({ children, reverse = false, imagePath, imageAlt }) => {
  return (
    <div
      className={`flex items-center gap-20 ${
        reverse ? "flex-row-reverse text-right" : ""
      }`}
    >
      <div className="space-y-4 shrink">{children}</div>
      <div className="relative min-w-[330px] h-[222px] shadow-xl">
        <Image
          src={imagePath}
          fill
          alt={imageAlt}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default TextWithImage;
