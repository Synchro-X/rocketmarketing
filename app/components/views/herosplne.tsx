import Spline from '@splinetool/react-spline/next';

export const  HeroSplinWave = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-10">
      <div className="w-full h-full relative">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/vaporwave-background.webm"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
}

export const PowerCube = () => {
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
