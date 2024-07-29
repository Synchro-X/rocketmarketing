"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { useGlobalContext } from "@/app/context/globalcontext";

export const Loader = () => {
  const { setLoadingComplete } = useGlobalContext();

  useEffect(() => {
    setLoadingComplete(false);
    const tl = gsap.timeline({
      paused: true,
      onComplete: () => {
        setLoadingComplete(true);
      },
    });

    tl.to(".panels .panel:first-child, .panels .panel:last-child", {
      scaleY: 1,
      duration: 1,
    })
      .to(
        ".panels .panel:not(:first-child):not(:last-child)",
        { scaleY: 1 },
        "-=0.5"
      )
      .to(".panels .panel", {
        scaleY: 0,
        duration: 0.3,
        stagger: 0.05,
      })
      .to(".panels", {
        clipPath: "circle(0%)",
        skewX: 0,
        duration: 1,
      })
      .to(
        ".page-main",
        {
          clipPath: "circle(100%)",
          duration: 1,
        },
        "-=0.3"
      )
      .to(".panels", {
        zIndex: "0",
      });
    tl.play();
  }, []);

  return (
    <>
      <div className="panels">
        <li className="panel"></li>
        <li className="panel"></li>
        <li className="panel"></li>
        <li className="panel"></li>
        <li className="panel"></li>
        <li className="panel"></li>
      </div>
    </>
  );
};
