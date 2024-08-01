"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGlobalContext } from "../context/globalcontext";

gsap.registerPlugin(ScrollTrigger);

export const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  const { open, setOpen } = useGlobalContext();

    const handleBackgroundClick = () => {
    setOpen(false);
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if(!open) return null

  return (
    <div className="fixed top-0 left-0 w-full h-full backdrop-blur-[6px] bg-[12141d] z-[999]">
      <div
        className="flex justify-center w-full h-full"
        onClick={handleBackgroundClick}
      >
        <div className="mt-[100px]" onClick={handleContentClick}>
          {children}
        </div>
      </div>
    </div>
  );
};
