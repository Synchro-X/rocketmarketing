

"use client"

import { useState, useEffect } from "react";

export default function Rocket() {

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
    <div className="relative w-full h-full">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/rocket-copy.webm"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}
