import Image from "next/image";
export const Section5 = () => {
  return (
    <>
      <section className="bcolor relative z-20">
        <div className="pt-[21px] pb-[96.45px] mx-auto container px-[100px]">
          <div className="flex items-center">
            <div className="w-[50%] relative">
              <Image
                src="/assets/homework.png"
                alt=""
                width={0}
                height={0}
                layout="responsive"
                style={{
                  width: "100%",
                }}
              />
            </div>
            <div className="w-[50%] shrink-0 flex flex-col">
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
                <h3 className="flex flex-col gtext text-[32px] font-semibold leading-[1] font-syne">
                  <span>
                    <span className="gctext">Establish</span> your market as
                    your
                  </span>
                  <span>kingdom</span>
                </h3>
              </div>
              <p className="flex flex-col text-white/[0.5] text-lg tracking-[-0.36px] leading-[25.2px] font-outfit">
                <span>
                  Establishing yourself as a power player in any market is
                  difficult so we{"'"}ve built a
                </span>
                <span>
                  team that is extremely passionate about adding value and
                  excited to take on
                </span>
                <span>
                  new projects. We enjoy deploying strategies that help bring
                  our clients brand
                </span>
                <span>
                  and business to the next level. Our mission is to ensure our
                  clients see tangible and measurable results !
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
