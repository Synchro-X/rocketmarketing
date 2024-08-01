import Image from "next/image";
export const Section5 = () => {
  return (
    <>
      <section className="bcolor relative z-20">
        <div className="pt-[21px] pb-[96.45px] mx-auto md:container md:px-[100px] px-[20px]">
          <div className="flex md:flex-row flex-col items-center">
            <div data-aos="fade-up" className="w-full md:w-[50%] relative">
             
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="100"
              className="md:w-[50%] shrink-0 flex flex-col"
            >
              <div className="flex items-center gap-[10px]">
                <div className="h-[1px] w-[15%] bg-white/[0.2]"></div>
                <div className="">
                  <h6 className="text font-bold tracking-[-0.36px] leading-[26px] text-sm font-outfit text-white shrink-0">
                    Home we work
                  </h6>
                </div>
                <div className="h-[1px] grow bg-white/[0.2]"></div>
              </div>
              <div className="mt-[23px] mb-[18px]">
                <h3
                  data-aos="fade-up"
                  data-aos-duration="500"
                  className="flex flex-col gtext text-[32px] font-semibold leading-[1] font-syne"
                >
                  <span>
                    <span className="gctext">Establish</span> your market as
                    your
                  </span>
                  <span>kingdom</span>
                </h3>
              </div>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex flex-col text-white/[0.5] text-lg tracking-[-0.36px] leading-[25.2px] font-outfit"
              >
                <span className="hidden md:flex">
                  Establishing yourself as a power player in any market is
                  difficult so we{"'"}ve built a
                </span>
                <span className="hidden md:flex">
                  team that is extremely passionate about adding value and
                  excited to take on
                </span>
                <span className="hidden md:flex">
                  new projects. We enjoy deploying strategies that help bring
                  our clients brand
                </span>
                <span className="hidden md:flex">
                  and business to the next level. Our mission is to ensure our
                  clients see tangible and measurable results !
                </span>
                <span className="md:hidden flex">
                  Establishing yourself as a power player in any market is difficult so we{"'"}ve built a team that is extremely passionate about adding value and excited to take on new projects. We
                  enjoy deploying strategies that help bring our clients brand and business to the next level. Our mission is to ensure our clients see tangible and measurable results !
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
