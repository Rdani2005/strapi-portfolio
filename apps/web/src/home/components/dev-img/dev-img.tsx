import Image from "next/image";

type DevImgProps = {
  containerStyles: string;
  imgSrc: string;
};

export function DevImg({ containerStyles, imgSrc }: DevImgProps) {
  return (
    <div className={containerStyles}>
      <Image src={imgSrc} fill priority alt="" />
    </div>
  );
}
