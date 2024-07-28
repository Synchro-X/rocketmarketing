"use client";

import { useEffect, useRef, useState } from "react";

export const GridLayers = () => {
  const [boxNumber, setBoxNumber] = useState<null | number>(null);

  const [boxSize, setBoxSize] = useState<null | number>(null);
  const [Hbox, setHBox] = useState<null | number>(null);

  useEffect(() => {
    const gridlines = ref.current;
    if (gridlines) {
      const root = document.documentElement
      setBoxNumber(root.getBoundingClientRect().height);
    }
  }, []);

  useEffect(() => {
    if (boxNumber !== null) {
      let propsize = Math.ceil(boxNumber / 80);
      const gridlines = ref.current;
      if (gridlines) {
        let HBoxNumbers = Math.ceil(
          (propsize * 1000) / gridlines.getBoundingClientRect().width
        );
        setHBox(HBoxNumbers);
      }
      setBoxSize(propsize);
    }
  }, [boxNumber]);

  
  const ref = useRef<null | HTMLDivElement>(null);


  return (
    <>
      <div
        className="absolute z-10 pl-[332px] top-0 w-full h-full bg-[#12141D]"
        ref={ref}
      >
        <div
          className={
            boxSize !== null
              ? `bg-white/[0.04] w-full flex flex-col gap-[1px] h-full relative  overflow-hidden`
              : `w-full flex flex-col gap-[1px] h-full relative  overflow-hidden`
          }
        >
          {boxSize !== null
            ? Array.from({ length: boxSize }, (box, index) => {
                return (
                  <div
                    className="flex gap-[1px]"
                    style={{ minHeight: `${boxSize}px` }}
                    key={index}
                  >
                    {Hbox !== null
                      ? Array.from({ length: Hbox }, (box, index) => {
                          return (
                            <div
                              key={index}
                              className="shrink-0 bg-[#12141D]"
                              style={{
                                width: `${boxSize}px`,
                                height: `${boxSize}px`,
                              }}
                            ></div>
                          );
                        })
                      : ""}
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};
