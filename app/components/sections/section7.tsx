

import Rocket from "../views/rocket";

export const Section7 = () => {

   
  return (
    <>
      <section  className="bcolor relative z-20">
        <div className="pt-[56px] pb-[86px] flex flex-col items-center">
          <div className="w-[246px] h-[276px]"><Rocket /></div>
          <div className="md:w-[50%] shrink-0 flex flex-col md:px-0 px-[20px]">
            <div data-aos="fade-up" className="mt-[24px] mb-[18px]">
              <h3 className="flex flex-col gtext text-[32px] font-semibold leading-[1] font-syne text-center">
                <span>
                  <span className="gctext">Our</span> Team
                </span>
              </h3>
            </div>
            <div
              className="flex flex-col text-white/[0.5] text-lg tracking-[-0.36px] leading-[25.2px] font-outfit items-center text-center"
              data-aos="fade-up"
              data-aos-duration="100"
            >
              <span className="md:flex hidden">
                The biggest advantage from hiring outside consultants is the
                access to new insights along with professional
              </span>
              <span className="md:flex hidden">
                expertise you may not need full time. We are passionate about
                providing as much value to our clients as
              </span>
              <span className="md:flex hidden">
                possible ! Our team members are experts each with unique talents
                and years of experience in design, branding,
              </span>
              <span>marketing, advertising, and sales.</span>
              <span className="flex md:hidden">
                The biggest advantage from hiring outside consultants is the
                access to new insights along with professional expertise you may
                not need full time. We are passionate about providing as much
                value to our clients as possible ! Our team members are experts
                each with unique talents and years of experience in
                design,branding, marketing, advertising, and sales.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
