




export default function Rocket() {
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
