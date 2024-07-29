
import { Button } from "../views/button";
import Image from "next/image";
import { HeroSplinWave } from "../views/herosplne";
import { HeaderWrapper } from "../views/headerwrapper";

export const HeroSection = () => {
  return (
    <>
      <header className="relative z-20">
        <HeaderWrapper>
          <HeroSplinWave />
          <div className="flex flex-col items-center pt-[194px] pb-[257px] bg-bghero md:px-0 px-[20px]">
            <div className="absolute w-full h-full z-10"></div>
            <h1 className="inline-flex md:flex flex-col items-center gtext font-syne md:text-[72px] text-[46px] relative z-20 leading-[69px] tracking-[-1.442px] font-bold text-center ">
              <span className="flex md:gap-[20px] flex-wrap justify-center">
                <span className="headertitle overflow-y-hidden gtext">
                  We Create The{"    "}
                </span>
                <span className="gctext"> Future:</span>
              </span>
              <span className="headertitle overflow-y-hidden">
                Innovating Today for a
              </span>
              <span className="headertitle overflow-y-hidden">
                Better Tomorrow
              </span>
            </h1>
            <span className="relative z-20 text-[18px] font-outfit tracking-[-0.36px] leading-[25.2px] text-lg text-white/[0.5] mt-[18px] mb-[34px] text-center headertitle overflow-y-hidden">
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
        </HeaderWrapper>
      </header>
    </>
  );
};
