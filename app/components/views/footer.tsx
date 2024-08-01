import Image from "next/image";

export const Footer = () => {
    return (
      <>
        <footer>
          <div className="mt-[115.4px]">
            <div className="flex flex-col md:container mx-auto px-[20px] md:px-[130px] gap-[41px]">
              <div className="h-[1px] w-full bg-[#eee]/[0.21]"></div>
              <div className="flex justify-between w-full items-center md:flex-row flex-col gap-[5px]">
                <div className="w-[130.895px] h-[44.593px] relative">
                  <Image src="/assets/logo.png" alt="" fill sizes="100vw"   />
                </div>
                <span className="text-sm leading-[24px] tracking-[-0.3px] font-lufga text-white/[0.3]">© 2024 RocketMarketing. All rights reserved.</span>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
}