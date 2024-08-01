"use client"

import {useEffect} from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const JetSplineWrapper = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".rootelement",
        start: "top 30%",
        end: "bottom bottom",
        scrub: true,
      },
    });

    timeline
      .fromTo(
        ".jet",
        { y: "100%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 3,
          ease: "power2.out",
        }
      )
      .to({}, { delay: 1 })
      .fromTo(
        ".boxcontent",
        { y: "100%" },
        {
          y: "0%",
          duration: 2,
          ease: "power2.out",
        }
      );
  }, []);
    return(
        <>{ children }</>
    )
}