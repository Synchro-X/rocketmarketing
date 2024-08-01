

import Spline from "@splinetool/react-spline/next";

export default function Rocket() {


 
  return (
    <>
      <div className="relative w-full h-full md:hidden flex">
        <Spline scene="https://prod.spline.design/q9mibBsNcjhOeK7c/scene.splinecode" />
      </div>
      <div className="md:flex hidden relative w-full h-full ">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/rocket-copy.webm"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </>
  );
}
