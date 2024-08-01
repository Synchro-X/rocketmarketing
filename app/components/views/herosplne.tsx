import Spline from "@splinetool/react-spline/next";

export const HeroSplinWave = () => {
  return (
    <div className={`absolute top-0 left-0 w-full h-full z-10`}>
      <div className="w-full h-full relative">
        <Spline scene="https://prod.spline.design/ZkX-kzcilXJcC21C/scene.splinecode" />
      </div>
    </div>
  );
};

export const PowerCube = () => {
  return (
    <>
      <div
        className={`absolute top-0 left-0 w-full h-full z-10  md:hidden flex`}
      >
        <div className="w-full h-full relative">
          <Spline scene="https://prod.spline.design/I3Nuuz2Kt1FmChM2/scene.splinecode" />
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full z-10  md:flex hidden`}
      >
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
    </>
  );
};
