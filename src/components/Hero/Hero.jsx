import Image from "next/image";
import heroSvg from "../../../public/hero.svg";

export const Hero = () => {
  return (
    <div className="flex justify-around items-center">
      <div className="w-[500px] h-[360px]">
        <Image src={heroSvg} alt="hero image" />
      </div>
      <div>
        <h1 className="text-[50px]">
          Spot to enjoy visiting
        </h1>
      </div>
    </div>
  );
};
