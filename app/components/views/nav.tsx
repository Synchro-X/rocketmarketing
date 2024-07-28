import Image from "next/image";
import { Button } from "./button";
export const Nav = () => {
  return (
    <>
      <nav className="fixed z-30 top-[40px] left-[50%] translate-x-[-50%]">
        <div className="min-h-[72px] flex items-center bg-[#1A202C] gap-[55px] rounded-[100px] px-[16px]">
          <div className="w-[130.895px] h-[44.593px] relative">
            <Image src="/assets/logo.png" alt="" fill sizes="100vw" />
          </div>
          <div>
            <Button />
          </div>
        </div>
      </nav>
    </>
  );
};
