"use client";

import { Input } from "../../components/input";
import { useState, useRef } from "react";
import Image from "next/image";
import { useGlobalContext } from "../../context/globalcontext";
import { Close } from "../icons/index";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const ref = useRef<HTMLDivElement | null>(null);

  const { open, setOpen } = useGlobalContext();

  const handleClick = (e: any) => {
    if (ref.current && ref.current?.contains(e.target)) return;

    setOpen(!open);
  };

  if (!open) return null;

  return (
    <>
      <section
        className="fixed top-0 left-0 w-full h-full backdrop-blur-[6px] bg-[#1a282c] z-[1000] opacity-[0.8]"
        onClick={handleClick}
      >
        <div className="relative flex items-center justify-center w-full h-full">
          <div
            ref={ref}
            className="z-[1000] relative flex justify-center items-center w-[90%] md:w-[489px] max-w-full"
          >
            <div
              data-aos="fade-up"
              data-aos-duration="200"
              className="w-full rounded-[32px] border-[2px] backdrop-blur-[10px] flex flex-col  border-[#FFF]/[0.8] bg-[rgba(29,31,39,0.30)] items-center px-[20px] md:px-[49px] py-[51px] gap-[24px] relative "
            >
              <span
                className="absolute right-[20px] top-[20px] cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <Close />
              </span>
              <div className="flex flex-col justify-between grow">
                <div className="flex flex-col gap-[8px]">
                  <h3 className="text-[32px] font-bold leading-[28px] tracking-[-0.4px] font-syne uppercase text-center">
                    LETS TAKEOFF TOGETHER 🚀
                  </h3>
                  <p className="text-base font-medium leading-[22.4px] font-outfit flex flex-col text-center text-white/[0.6] mt-[8px]">
                    <span>
                      We bring a wealth of digital marketing knowledge and
                      expertise to every industry we touch. Get in touch and Let
                      {"'"}s get to work together.
                    </span>
                  </p>
                </div>
              </div>
              <form className="flex flex-col gap-[16px] w-full">
                <Input
                  type="value"
                  placeholder="Name"
                  value={name}
                  change={setName}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  change={setEmail}
                />
                <Input
                  type="textarea"
                  placeholder="Message"
                  value={message}
                  change={setMessage}
                />
                <button className="flex min-h-[56px] text-center items-center font-lufga text-base text-white bg-[rgba(255,255,255,0.17)] shadow-[0px_20.238px_14px_3px_rgba(255,255,255,0.12)_inset] justify-center rounded-[40px]">
                  Get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

