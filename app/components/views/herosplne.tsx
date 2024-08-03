import Spline from "@splinetool/react-spline/next";
import ImageSequence from "./Imagesequencing";

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
        className={``}
      >
        <ImageSequence
            width={700}
            height={500}
            frameCount={389}
            basePath="/assets/powercube/"
            extension="png"
            fps={30}
          />
      </div>
    </>
  );
};
