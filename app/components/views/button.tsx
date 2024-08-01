"use client"

import { useGlobalContext } from "@/app/context/globalcontext";

export const Button = () => {

  const {  open,setOpen  } = useGlobalContext()

  return (
    <>
      <span className="relative rounded-[40.477px] overflow-hidden shadow-[0px_20.238px_14px_3px_rgba(255, 255, 255, 0.12)_inset] w-[188px] min-h-[56px] block" onClick={() => setOpen(!open)}>
        <div className="rotateanimation z-0 translate-y-[-50%] top-[50%]"></div>
        <button className="text-white font-lufga font-bold text-base  absolute m-[1px] top-0 left-0 right-0 bottom-0 z-10 bg-[#12141D] rounded-[40.477px]">
          Get in touch
        </button>
      </span>
    </>
  );
};
