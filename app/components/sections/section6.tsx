"use client";


import { Input } from "../../components/input";
import { useState } from "react";
import { Footer } from "../views/footer";
import Image from "next/image";
import Rocket from "../views/rocket";
export const Section6 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <section className="bcolor relative z-20">
        <div className="pt-[88px] pb-[514px] relative">
          <div className="container mx-auto px-[160px]">
            <div className="w-full rounded-[32px] border-[2px] backdrop-blur-[6px] flex  border-[#FFF] bg-[rgba(29,31,39,0.30)] px-[50px] py-[42px] gap-[68px]">
              <div className="flex flex-col justify-between grow">
                <div className="flex flex-col gap-[8px]">
                  <h3 className="text-[32px] font-bold leading-[28px] tracking-[-0.4px] font-syne uppercase">
                    LETS TAKEOFF TOGETHER 🚀
                  </h3>
                  <p className="text-base font-medium leading-[22.4px] font-outfit flex flex-col text-white/[0.5]">
                    <span>
                      We bring a wealth of digital marketing knowledge and
                      expertise to
                    </span>
                    <span>
                      every industry we touch. We help our clients adapt to meet
                      the
                    </span>
                    <span>
                      opportunities and the challenges of the current digital
                      landscape.
                    </span>
                    <span>LETS WORK TOGETHER !</span>
                  </p>
                </div>
                <div className="flex gap-[24px] items-center pb-[20px]">
                  {Socials.map((social, index) => {
                    return (
                      
                        <Image src={social} alt="" width={64} height={64} key={index}/>
                    );
                  })}
                </div>
              </div>
              <form className="flex flex-col gap-[16px] grow">
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
          <div className="absolute bottom-0 w-full z-20">
            <div className="relative">
              <Image
                src="/assets/white-transparent 1 (1).png"
                alt=""
                width={0}
                height={0}
                layout="responsive"
                style={{
                  width: "100%",
                }}
              />
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
};

const Socials = [
  "/assets/Frame 1686552573.png",
  "/assets/Frame 1686552577.png",
  "/assets/Frame 1686552578.png",
  "/assets/Frame 1686552579.png",
];
