import { Active } from "../icons";
import Marquee from "react-fast-marquee";
export const Section2 = () => {
  return (
    <>
      <section className="bcolor relative z-20 pt-[120px] ">
        <div className="absolute h-[200px]  w-full bg-bghero top-[-200px]"></div>
        <div className="flex md:flex-row flex-col gap-[50px] md:gap-0 px-[20px] md:px-[170px] pb-[72px] mx-auto container justify-between items-center">
          <div className="flex flex-col gap-[18px] md:w-[50%]">
            <h4 className="flex flex-col text-[32px] font-bold font-syne leading-[1]">
              <span className="gtext" data-aos="fade-up">
                We create amazing
              </span>
              <span
                className="gctext"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                experiences
              </span>
            </h4>
            <p
              className="flex flex-col font-outfit text-lg leading-[25.2px] tracking-[-0.36px] text-white/[0.5]"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="md:flex hidden">
                Understanding the implications of different platforms, user
              </span>
              <span className="md:flex hidden">
                interfaces, content management systems and programming
              </span>
              <span className="md:flex hidden">
                languages. We are better equipped to engineer our marketing
              </span>
              <span className="md:flex hidden">
                strategy via SMM, PPC, and SEO. We tailor our strategy to suit
              </span>
              <span className="md:flex hidden">
                customer demographics, consumer behavior by using advanced
              </span>
              <span className="md:flex hidden">
                UI/UX, programmatic advertising and content development.
              </span>
              <span className="flex md:hidden">
                Understanding the implications of different platforms, user
                interfaces, content management systems and programming
                languages. We are better equipped to engineer our marketing
                strategy via SMM, PPC, and SEO. We tailor our strategy to suit
                customer demographics, consumer behavior by using advanced
                UI/UX, programmatic advertising and content development.
              </span>
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="backdrop-blur-[6px] bg-[#1D1F27] rounded-[32px] border-[2px] border-white/[0.5] pt-[44px] pb-[50px] flex flex-col md:w-[50%] w-full gap-[42px] overflow-hidden relative"
          >
            <div className="px-[40px] flex flex-col gap-[8px] ">
              <p className="font-bold text-[20px] font-syne leading-[28px] trcking-[-0.4px] text-white px-[15px]">
                Change the world by changing your brand
              </p>
              <p className="flex flex-col font-medium text-base font-outfit text-white/[0.6] px-[15px]">
                <span className="hidden md:flex">
                  Pioneering breakthroughs in key sectors - from Web3 innovation
                  to
                </span>
                <span className="hidden md:flex">
                  FinTech, EdTech, E-commerce, Music and Entertainment.
                </span>
                <span className="md:hidden flex">
                  Pioneering breakthroughs in key sectors - from Web3 innovation
                  to FinTech, EdTech, E-commerce, Music and Entertainment.
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-[16px] w-full items-center ">
              <div className="absolute top-0 w-[80px] h-full left-0  llg z-10 "></div>
              <div className="flex flex-col gap-[16px] relative *:">
                <Marquee className="flex">
                  {Brands.map((brand, index) => {
                    return (
                      <div
                        key={index}
                        className="px-[20px] min-h-[26px] flex gap-[10px] items-center text-sm font-outfit font-bold leading-[26px] tracking-[-0.36px] text-white rounded-[24px] border-[1px] border-[#5BD0F4] shrink-0 py-[6px]"
                      >
                        <Active />
                        <span>{brand}</span>
                      </div>
                    );
                  })}
                </Marquee>
                <Marquee className="flex" direction="right">
                  {Brands.map((brand, index) => {
                    return (
                      <div
                        key={index}
                        className="px-[20px] min-h-[26px] flex gap-[10px] items-center text-sm font-outfit font-bold leading-[26px] tracking-[-0.36px] text-white rounded-[24px] border-[1px] border-[#5BD0F4] shrink-0 py-[6px]"
                      >
                        <Active />
                        <span>{brand}</span>
                      </div>
                    );
                  })}
                </Marquee>
              </div>
              <div className="absolute top-0 w-[80px] h-full right-0 rlg z-10 "></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Brands = [
  "Graphics design",
  "Copywriting",
  "Content marketing",
  "Marketing",
  "Website design",
  "Music",
  "Strategy planning",
  "Advertising design",
];
