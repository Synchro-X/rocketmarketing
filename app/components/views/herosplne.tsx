"use client"

import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";


export const HeroSplinWave = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  

  useEffect(() => {
    const handleLoad = () => {
      setIsPageLoaded(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isPageLoaded) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full z-10">
      <div className="w-full h-full relative">
        <Spline scene="https://prod.spline.design/ZkX-kzcilXJcC21C/scene.splinecode" />
      </div>
    </div>
  );
};

export const PowerCube = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsPageLoaded(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isPageLoaded) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full z-10">
      <div className="w-full h-full relative">
        <Spline scene="https://prod.spline.design/I3Nuuz2Kt1FmChM2/scene.splinecode" />
      </div>
    </div>
  );
};


