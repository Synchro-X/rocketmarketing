
import { HeroSection } from "./components/sections/herosection";
import { Section2 } from "./components/sections/section2";
import { Section3 } from "./components/sections/section3";
import { Section4 } from "./components/sections/section4";
import { Section5 } from "./components/sections/section5";
import { Section7 } from "./components/sections/section7";
import { Section6 } from "./components/sections/section6";
import { GridLayers } from "./components/views/gridlayers";


export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="relative md:bg-transparent bg-[#12141D]">
        <GridLayers />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section7 />
        <Section6 />
      </main>
    </>
  );
}
