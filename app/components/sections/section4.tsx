import Image from "next/image";
import Marquee from "react-fast-marquee";
//import { PowerCube } from "../views/herosplne";
export const Section4 = () => {
  return (
    <>
      <section className="bcolor relative z-20">
        <div className="flex pt-[56px] pb-[34.08px] flex-col items-center">
          <div className="w-[400px] h-[310px] relative"></div>
          <div className="flex md:w-[632px] w-full flex-col items-center overflow-hidden md:mt-0 mt-[20px]">
            <div className="relative w-[100%]">
              <div className="absolute w-[80px] h-[100px] left-0 llg z-10 top-0">
                {" "}
              </div>
              <Marquee className="flex brand">
                {BrandImages.map((image, index) => {
                  return (
                    <div
                      className="shrink-0 w-[88px] h-[88px] rounded-full border-[2.777px] bg-[#1D1F27] backdrop-blur-[8.332468032836914px] flex justify-center items-center border-[#FFF]"
                      key={index}
                    >
                      <div className="relative w-[58px] h-[58px]">
                    
                      </div>
                    </div>
                  );
                })}
              </Marquee>
              <div className="absolute w-[80px] h-[170px] right-0 rlg z-10 top-0"></div>
            </div>
          </div>
          <h3
            data-aos="fade-up"
            className="flex flex-col gtext font-syne font-bold text-[32px] mt-[24px] items-center text-center"
          >
            <span data-aos="fade-up" className="hidden md:flex">
              Over the last <span className="gctext">decade</span> we{"'"}ve
              worked
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="500"
              className="hidden md:flex"
            >
              with some of the most well known
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="100"
              className="hidden md:flex"
            >
              brands in the world.
            </span>
            <span className="md:hidden block px-[20px]">
              Over the last <span className="gctext">decade</span> we{"'"}ve
              worked with some of the most well known brands in the world.
            </span>
          </h3>
          <div className="mt-[18px]"></div>
          <button
            data-aos="fade-up"
            data-aos-duration="100"
            className="min-h-[41px] flex items-center justify-center rounded-[28px] border-[2px] border-white/[0.10] bg-[rgba(39,174,96,0.07)] gap-[10px] w-[169px] font-outfit"
          >
            <span className="text-sm font-bold leading-[26px] tracking-[-0.36px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
              >
                <circle cx="5" cy="5.42065" r="5" fill="#27AE60" />
              </svg>
            </span>
            <span>My footprint</span>
          </button>
        </div>
      </section>
    </>
  );
};

const BrandImages = [
  "/assets/image 1 (1).png",
  "/assets/image 1 (2).png",
  "/assets/image 1 (3).png",
  "/assets/image 1 (4).png",
  "/assets/image 1 (5).png",
  "/assets/image 1 (6).png",
  "/assets/image 1.png",
  "/assets/image 2 (1).png",
];
