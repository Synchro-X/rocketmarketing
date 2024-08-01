"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { useGlobalContext } from "@/app/context/globalcontext";
import SplitType from "split-type";

export const HeaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isLoadingComplete } = useGlobalContext();

  

  useEffect(() => {
    const headerTitle = new SplitType(".headertitle");
    const tl = gsap.timeline();

    if (isLoadingComplete) {
      gsap.to(".char", {
        y: 0,
        stagger: 0.05,
        duration: 0.1,
      });
    }
  }, [isLoadingComplete]);

  return <div className="relative z-[888]">{children}</div>;
};
