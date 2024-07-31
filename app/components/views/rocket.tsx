

"use client"

import { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";

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
      <Spline scene="https://prod.spline.design/q9mibBsNcjhOeK7c/scene.splinecode" />
    </div>
  );
}
