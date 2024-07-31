"use client"
import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

export default function JetSpline() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {isLoaded ? (
        <div className="relative w-full h-full">
          <Spline scene="https://prod.spline.design/Da9JeeuvY50yNyef/scene.splinecode" />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
