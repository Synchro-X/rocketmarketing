

import Image from "next/image";
import JetSpline from "../views/jetspline";
import { JetSplineWrapper } from "../views/jetsplinewrapper";


export const Section3 = () => {
  
  return (
    <JetSplineWrapper>
    <div
      className="rootelement bcolor relative z-20  block overflow-hidden"
    >
      <div className="jet absolute z-20 top-0 left-0 w-full h-full ">
        <JetSpline />
      </div>
      <div className="md:pt-[188px] md:pb-[188px] pt-[188px] pb-[88px] relative z-30">
        <div className="flex flex-col items-center">
          <h2
            data-aos="fade-up"
            className="flex flex-col text-[32px] gtext items-center font-bold font-syne leading-[1] text-center"
          >
            <div>
              Our <span className="gctext">services</span> span across
            </div>
            <div>multiple industries</div>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            className="flex flex-col leading-[25.2px] tracking-[-0.36px] text-white/[0.5] px-[20px] font-outfit items-center mt-[18px] text-center"
          >
            <span className="hidden md:flex">
              We bring a wealth of digital marketing knowledge and expertise to
              every industry we touch. We help our clients adapt to{" "}
            </span>
            <span className="hidden md:flex">
              meet the opportunities and the challenges of the current digital
              landscape.
            </span>
            <span className="md:hidden flex">
              We bring a wealth of digital marketing knowledge and expertise to
              every industry we touch. We help our clients adapt to meet the
              opportunities and the challenges of the current digital landscape.
            </span>
          </p>
        </div>
        <div className="mx-auto md:container hidden md:flex flex-col gap-[29px] mt-[48px] px-[20px] md:px-[80px] boxcontent border-[2] border-white">
          <div className="flex md:flex-row flex-col gap-[24px]">
            {Services.slice(0, 2).map((service, index) => (
              <div
                className="group flex backdrop-blur-[6px] bg-[rgba(29,31,39,0.24)] rounded-[32px] border-[2px] border-white/[0.6] transition-border duration-[1.2s] hover:border-[#2b59ff] md:px-0 px-[20px]  md:gap-[42px] md:py-[27px] py-[40px] md:pl-[40px] items-center shrink-0 grow relative  md:flex-row flex-col "
                key={index}
              >
                <div className="relative w-[100%] h-[258px] grayscale group-hover:grayscale-0 transition-all md:hidden flex">
                  <Image
                    src={service.image}
                    alt={service.image}
                    fill
                    priority
                  />
                </div>
                <div className="flex flex-col gap-[16px] relative z-20">
                  <h6 className="text-large font-bold leading-[28px] tracking-[-0.4px] font-outfit flex flex-col text-gradient">
                    {service.name.map((n, index) => (
                      <span key={index}>{n}</span>
                    ))}
                  </h6>
                  <p className="flex flex-col tex-sm font-outfit font-medium text-white/[0.6] text-gradient">
                    {service.contents.map((con, index) => (
                      <span key={index}>{con}</span>
                    ))}
                  </p>
                </div>
                <div className="border-[1] border-white md:absolute w-[60%] right-0 z-0 grayscale group-hover:grayscale-0 md:flex hidden transition-all ">
                  <Image
                    src={service.image}
                    alt={service.image}
                    layout="responsive"
                    width={0}
                    height={0}
                    style={{
                      width: "100%",
                    }}
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex md:flex-row flex-col gap-[24px]">
            {Services.slice(2, Services.length).map((service, index) => (
              <div
                key={index}
                className="group flex flex-col backdrop-blur-[6px] bg-[rgba(29,31,39,0.24)] rounded-[32px] border-[2px] border-white/[0.6]  gap-[20px] md:py-[33px]  md:px-[40px] px-[18px] py-[40px] items-center grow-[1]  relative transition-border duration-[1.2s] hover:border-[#2b59ff]"
              >
                <div className="relative w-[100%] h-[258px] grayscale group-hover:grayscale-0 transition-all">
                  <Image
                    src={service.image}
                    alt={service.image}
                    fill
                    priority
                  />
                </div>
                <div className="flex flex-col gap-[16px] relative z-20">
                  <h6 className="text-large font-bold leading-[28px] tracking-[-0.4px] font-outfit flex flex-col text-gradient ">
                    {service.name.map((n, index) => (
                      <span key={index}>{n}</span>
                    ))}
                  </h6>
                  <p className="flex flex-col tex-sm font-outfit font-medium text-white/[0.6] text-gradient">
                    {service.contents.map((con, index) => (
                      <span key={index}>{con}</span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto md:container md:hidden flex flex-col gap-[29px] mt-[48px] px-[20px] md:px-[80px] ">
          <div className="flex md:flex-row flex-col gap-[24px]">
            {ServicesMobile.slice(0, 2).map((service, index) => (
              <div
                className="group flex backdrop-blur-[6px] bg-[rgba(29,31,39,0.24)] rounded-[32px] border-[2px] border-white/[0.6] transition-border duration-[1.2s] hover:border-[#2b59ff] md:px-0 px-[20px]  md:gap-[42px] md:py-[27px] py-[40px] md:pl-[40px] items-center shrink-0 grow relative  md:flex-row flex-col "
                key={index}
              >
                <div className="relative w-[100%] h-[258px] grayscale group-hover:grayscale-0 transition-all md:hidden flex">
                  <Image
                    src={service.image}
                    alt={service.image}
                    fill
                    priority
                  />
                </div>
                <div className="flex flex-col gap-[16px] relative z-20">
                  <h6 className="text-large font-bold leading-[28px] tracking-[-0.4px] font-outfit flex flex-col text-gradient">
                    {service.name.map((n, index) => (
                      <span key={index}>{n}</span>
                    ))}
                  </h6>
                  <p className="flex flex-col tex-sm font-outfit font-medium text-white/[0.6] text-gradient">
                    {service.contents.map((con, index) => (
                      <span key={index}>{con}</span>
                    ))}
                  </p>
                </div>
                <div className="border-[1] border-white md:absolute w-[60%] right-0 z-0 grayscale group-hover:grayscale-0 md:flex hidden transition-all ">
                  <Image
                    src={service.image}
                    alt={service.image}
                    layout="responsive"
                    width={0}
                    height={0}
                    style={{
                      width: "100%",
                    }}
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex md:flex-row flex-col gap-[24px]">
            {ServicesMobile.slice(2, Services.length).map((service, index) => (
              <div
                key={index}
                className="group flex flex-col backdrop-blur-[6px] bg-[rgba(29,31,39,0.24)] rounded-[32px] border-[2px] border-white/[0.6]  gap-[20px] md:py-[33px]  md:px-[40px] px-[18px] py-[40px] items-center grow-[1]  relative transition-border duration-[1.2s] hover:border-[#2b59ff]"
              >
                <div className="relative w-[100%] h-[258px] grayscale group-hover:grayscale-0 transition-all">
                  <Image
                    src={service.image}
                    alt={service.image}
                    fill
                    priority
                  />
                </div>
                <div className="flex flex-col gap-[16px] relative z-20">
                  <h6 className="text-large font-bold leading-[28px] tracking-[-0.4px] font-outfit flex flex-col text-gradient ">
                    {service.name.map((n, index) => (
                      <span key={index}>{n}</span>
                    ))}
                  </h6>
                  <p className="flex flex-col tex-sm font-outfit font-medium text-white/[0.6] text-gradient">
                    {service.contents.map((con, index) => (
                      <span key={index}>{con}</span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </JetSplineWrapper>
  );
};

const Services = [
  {
    name: ["Music"],
    contents: [
      "We help artists and labels gain visibility",
      "and exposure. We also assist with ",
      "branding and artist development. We",
      "connect the dots between artists, writers,",
      "and producers !",
    ],
    image: "/assets/image-Photoroom 1.png",
  },
  {
    name: [
      "Web Design/Development-",
      "Crypto Web3 Education and",
      "Deployment",
    ],
    contents: [
      "We develop and design websites as well",
      "as work with Web3 companies. For",
      "people that are interested in learning",
      "about Crypto and Web3 we offer - Crypto",
      "Curriculum : Beginner, Intermediate, and",
      "Advanced courses/information on",
      "Blockchain technology, Investing, and",
      "DeFi.",
    ],
    image: "/assets/image-Photoroom (1) 1.png",
  },
  {
    name: ["Video editing"],
    contents: [
      "Our internal team will assist with video editing to   ",
      "ensure our clients contents is at the highest level.",
      "Including VFX, Color Grading, Post Production and",
      "Synchronization.",
    ],
    image: "/assets/image-Photoroom (2) 1.png",
  },
  {
    name: ["Content marketing"],
    contents: [
      "We market our clients contents across all media",
      "platforms to ensure the maximum amount of",
      "visibility and brand awareness.",
    ],
    image: "/assets/image-Photoroom (3) 1.png",
  },
  {
    name: ["Strategy planning"],
    contents: [
      "We assist our clients in the go to market strategy",
      "for specific products and services.",
    ],
    image: "/assets/image-Photoroom (4) 1.png",
  },
];

const ServicesMobile = [
  {
    name: ["Music"],
    contents: [
      "We help artists and labels gain visibility and exposure. We also assist with branding and artist development. We connect the dots between artists, writers, and producers !",
    ],
    image: "/assets/image-Photoroom 1.png",
  },
  {
    name: ["Web Design/Development-Crypto Web3 Education and Deployment"],
    contents: [
      "We develop and design websites as well as work with Web3 companies. For people that are interested in learning about Crypto and Web3 we offer - Crypto Curriculum : Beginner, Intermediate, and Advanced courses/information on Blockchain technology, Investing, and DeFi.",
    ],
    image: "/assets/image-Photoroom (1) 1.png",
  },
  {
    name: ["Video editing"],
    contents: [
      "Our internal team will assist with video editing to ensure our clients contents is at the highest level. Including VFX, Color Grading, Post Production and Synchronization.",
    ],
    image: "/assets/image-Photoroom (2) 1.png",
  },
  {
    name: ["Content marketing"],
    contents: [
      "We market our clients contents across all media platforms to ensure the maximum amount of visibility and brand awareness.",
    ],
    image: "/assets/image-Photoroom (3) 1.png",
  },
  {
    name: ["Strategy planning"],
    contents: [
      "We assist our clients in the go to market strategy for specific products and services.",
    ],
    image: "/assets/image-Photoroom (4) 1.png",
  },
];
