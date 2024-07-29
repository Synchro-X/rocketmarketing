"use client";

import { useEffect, useRef, useState } from "react";

export const GridLayers = () => {
  const [boxNumber, setBoxNumber] = useState<number | null>(null);
  const [boxSize, setBoxSize] = useState<number | null>(null);
  const [Hbox, setHBox] = useState<number | null>(null);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const gridlines = ref.current;
    if (gridlines) {
      const root = document.documentElement;
      const newBoxNumber = root.getBoundingClientRect().height + 1000;
      setBoxNumber(newBoxNumber);
      console.log("boxNumber set to:", newBoxNumber); // Debugging line
    }
  }, []);

  useEffect(() => {
    if (boxNumber !== null && boxNumber > 0) {
      let propsize = Math.ceil(boxNumber / 80);
      const gridlines = ref.current;
      if (gridlines) {
        let HBoxNumbers = Math.ceil(
          (propsize * 1000) / gridlines.getBoundingClientRect().width
        );
        if (!isNaN(HBoxNumbers) && HBoxNumbers > 0 && HBoxNumbers < 10000) {
          setHBox(HBoxNumbers);
          console.log("HBox set to:", HBoxNumbers); // Debugging line
        } else {
          console.error("Invalid HBoxNumbers:", HBoxNumbers);
        }
      }
      if (!isNaN(propsize) && propsize > 0 && propsize < 10000) {
        setBoxSize(propsize);
        console.log("boxSize set to:", propsize); // Debugging line
      } else {
        console.error("Invalid propsize:", propsize);
      }
    }
  }, [boxNumber]);

  return (
    <div
      className="absolute hidden md:block z-10 pl-[332px] top-0 w-full h-full bg-[#12141D]"
      ref={ref}
    >
      <div
        className={
          boxSize !== null
            ? `bg-white/[0.04] w-full flex flex-col gap-[1px] h-full relative overflow-hidden`
            : `w-full flex flex-col gap-[1px] h-full relative overflow-hidden`
        }
      >
        {boxSize !== null && Hbox !== null
          ? Array.from({ length: boxSize }, (_, rowIndex) => (
              <div
                className="flex gap-[1px]"
                style={{ minHeight: `${boxSize}px` }}
                key={rowIndex}
              >
                {Array.from({ length: Hbox }, (_, colIndex) => (
                  <div
                    key={colIndex}
                    className="shrink-0 bg-[#12141D]"
                    style={{
                      width: `${boxSize}px`,
                      height: `${boxSize}px`,
                    }}
                  ></div>
                ))}
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};
