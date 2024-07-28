
import { Button } from "../views/button";
import Image from "next/image";
import { HeroSplinWave } from "../views/herosplne";

export const HeroSection = () => {
  return (
    <>
      <header className="relative z-20">
        <div className="flex flex-col items-center pt-[194px] pb-[257px] bg-bghero">
          <div className="absolute w-full h-full z-10"></div>
          <h1 className="flex flex-col items-center gtext font-syne text-[72px] relative z-20 leading-[69px] tracking-[-1.442px] font-bold">
            <span>
              We Create The <span className="inline-block gctext">Future:</span>
            </span>
            <span>Innovating Today for a</span>
            <span>Better Tomorrow</span>
          </h1>
          <span className="relative z-20 text-[18px] font-outfit tracking-[-0.36px] leading-[25.2px] text-lg text-white/[0.5] mt-[18px] mb-[34px]">
            ROCKET MARKETING : WE DELIVER YOUR MESSAGE TO THE PLANET.
          </span>
          <span className="relative z-20">
            <Button />
          </span>

          <span className="mt-[48px] relative z-20">
            <div className="w-[56px] h-[56px] rounded-full border-[rgba(255,255,255,0.10)] bg-[#12141D] flex justify-center items-center">
              <Image
                src="/assets/Arrow - Down.png"
                alt=""
                sizes="100vw"
                width={12}
                height={18}
              />
            </div>
          </span>
        </div>
      </header>
    </>
  );
};
