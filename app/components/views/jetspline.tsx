

import Spline from "@splinetool/react-spline/next";
import ImageSequence from "./Imagesequencing";

export default function JetSpline() {


  return (
    <>
        <div className="relative md:flex  items-center justify-center hidden w-full h-full">
          <ImageSequence
            width={700}
            height={500}
            frameCount={506}
            basePath="/assets/rockets/"
            extension="png"
            fps={30}
          />
        </div>
    </>
  );
}
