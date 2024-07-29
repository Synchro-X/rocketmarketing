"use client"

import React, { useEffect, useState } from "react";

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
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/vaporwave-background-copy (1).webm"
          autoPlay
          loop
          muted
          playsInline
        />
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
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/powerccube.webm"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};


