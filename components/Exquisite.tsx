"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const ExquisiteDesign = () => {
  const [isBW, setIsBW] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLImageElement>(null);
  const rightImageRef = useRef<HTMLImageElement>(null);
    const yinyang = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    // Animate overlay scaling top to bottom
    gsap.fromTo(
      overlayRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top",
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          setIsBW(!isBW);
          gsap.to(overlayRef.current, {
            scaleY: 0,
            transformOrigin: "bottom",
            duration: 0.5,
            ease: "power2.in",
          });
        },
      }
    );
  };

  return (
    <section className="w-full min-h-screen px-4 py-10 md:py-20 relative bg-black text-white">
        <div className='object-contain md:w-[400px] md:h-[400px]  w-[0px] h-[0px] absolute md:-top-48 '>
            <Image src="/yut_pattern.png" alt={'patter'} fill className="opacity-50" />
        </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 relative">
        {/* Image Left */}
        <div className="relative w-full md:w-1/2 aspect-[4/5] rounded-xl overflow-hidden">
          <Image
            ref={leftImageRef}
            src={isBW ? "/bw1.png" : "/yute_hero.png"}
            alt="Left Design"
            fill
            className="object-cover transition-all duration-300"
          />
          <h3 className="text-7xl text-white absolute z-20 top-3">Youth</h3>
        </div>

        {/* Yin Yang Button */}
        <div ref={yinyang} className="hover:animate-spin animate-pulse relative z-10 flex-shrink-0 w-16 h-16 md:w-30 md:h-30 bg-white rounded-full border-4 border-black cursor-pointer flex items-center justify-center hover:scale-105 transition-transform duration-200" onClick={handleToggle}>
          <Image src="/yinyang.png" alt="Yin Yang" width={60} height={60} />
        </div>

        {/* Image Right */}
        <div className="relative w-full md:w-1/2 aspect-[4/5] rounded-xl overflow-hidden">
          <Image
            ref={rightImageRef}
            src={isBW ? "/bw2.png" : "/yutehero.png"}
            alt="Right Design"
            fill
            className="object-cover transition-all duration-300"
          />
          <h3 className="text-7xl text-white absolute z-20 bottom-3 right-2">Culture</h3>
        </div>

        {/* GSAP Overlay */}
        <div
          ref={overlayRef}
          className="absolute top-0 left-0 w-full h-full bg-white z-20 pointer-events-none scale-y-0 origin-top"
        />
      </div>

      {/* <div className="mt-10 text-center px-4 text-lg md:text-xl tracking-wide">
        <p>Exquisite designs, now in <span className="font-bold">Dual Modes</span>.</p>
      </div> */}
    </section>
  );
};

export default ExquisiteDesign;
