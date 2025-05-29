"use client"
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from 'react-countup';
import useSound from 'use-sound';
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger);

const YutecultrSocialProof = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const [play] = useSound('/sounds/count-up.mp3', { volume: 0.6 });

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      onEnter: () => {
        setStartCount(true);
        play();
      },
      once: true,
    });

    return () => trigger.kill();
  }, [play]);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white relative min-h-screen px-6 py-20 w-full"
    >
        {/* <div className="absolute bg-[url(/floral.png)] top-0 object-bottom w-screen h-screen z-10"></div> */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4 uppercase tracking-widest font-mono">Why They Rock Yutecultr</h2>
        <p className="text-gray-400 max-w-3xl text-3xl mx-auto mb-12">
          Real vibes. Real people. Real numbers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white text-3xl font-bold">
          <div className="flex flex-col items-center font-sans">
            {startCount && <CountUp end={100} duration={2} suffix="+" />}
            <p className="text-sm text-gray-400 mt-2 uppercase">Tees Sold</p>
          </div>
          <div className="flex flex-col items-center font-sans">
            {startCount && <CountUp end={3} duration={2} suffix="+" />}
            <p className="text-sm text-gray-400 mt-2 uppercase">Universities</p>
          </div>
          <div className="flex flex-col items-center font-sans">
            {startCount && <CountUp end={99} duration={2} suffix="%" />}
            <p className="text-sm text-gray-400 mt-2 uppercase text-center">Happy Youths</p>
          </div>
        </div>
      </div>
      {/* <div className='object-contain w-[400px] h-[400px] absolute  -bottom-6 '>
        <Image src="/yut_pattern.png" alt={'patter'} fill  />
      </div> */}
      
    </section>
  );
};

export default YutecultrSocialProof;
