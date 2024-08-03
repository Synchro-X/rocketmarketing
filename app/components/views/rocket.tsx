

import Spline from "@splinetool/react-spline/next"
import ImageSequence from "./Imagesequencing";
export default function Rocket() {

  
 
  return (
    <>
      <div className="relative w-full h-full">
        <ImageSequence
          width={700}
          height={500}
          frameCount={438}
          basePath="/assets/rocket/"
          extension="png"
          fps={30}
        />
      </div>
    </>
  );
}
