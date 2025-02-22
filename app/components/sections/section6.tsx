"use client";

import { Input } from "../../components/input";
import { useState } from "react";
import { Footer } from "../views/footer";
import Image from "next/image";
export const Section6 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <section className="bcolor relative z-20">
        <div className="pt-[88px] pb-[200px] md:pb-[514px] relative">
          <div className="md:container mx-auto px-[20px] md:px-[160px]">
            <div
              data-aos="fade-up"
              data-aos-duration="200"
              className="w-full rounded-[32px] border-[2px] backdrop-blur-[6px] flex  md:flex-row flex-col  border-[#FFF]/[0.5] bg-[rgba(29,31,39,0.30)] px-[20px] md:px-[50px] py-[42px] gap-[68px]"
            >
              <div className="flex flex-col justify-between grow">
                <div className="flex flex-col gap-[8px]">
                  <h3 className="text-[32px] font-bold leading-[28px] tracking-[-0.4px] font-syne uppercase">
                    LETS TAKEOFF TOGETHER 🚀
                  </h3>
                  <p className="text-base font-medium leading-[22.4px] font-outfit flex flex-col text-white/[0.5]">
                    <span className="md:flex hidden">
                      We bring a wealth of digital marketing knowledge and
                      expertise to
                    </span>
                    <span className="md:flex hidden">
                      every industry we touch. We help our clients adapt to meet
                      the
                    </span>
                    <span className="md:flex hidden">
                      opportunities and the challenges of the current digital
                      landscape.
                    </span>
                    <span className="md:flex hidden">LETS WORK TOGETHER !</span>
                    <span className="flex md:hidden">
                      We bring a wealth of digital marketing knowledge and
                      expertise to every industry we touch. We help our clients
                      adapt to meet the opportunities and the challenges of the
                      current digital landscape. LETS WORK TOGETHER !
                    </span>
                  </p>
                </div>
                <div className="flex gap-[24px] md:mt-0 mt-[50px] items-center pb-[20px] flex-wrap">
                  {Socials.map((social, index) => {
                    return (
                      <a
                        className="md:w-[64px] md:h-[64px] w-[36px] h-[36px] relative"
                        key={index}
                        href="https://www.instagram.com/rocketmarketing.io"
                        target="__blank"
                      >
                        <Image src={social} alt="" fill sizes="100vw" />
                      </a>
                    );
                  })}
                  <div className="flex flex-col gap-[2px]">
                    <span className="text-[18px] font-syne leading-[28px] tracking-[-0.4px] font-bold text-white">Connect with us on Instagram</span>
                    <span className="text-white/[0.6] text-sm font-outfit">Send us a dm on instagram and lets talk!</span>
                  </div>
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
  "/assets/Frame 1686552577.png",
];
