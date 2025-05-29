"use client"
import React, { useRef } from 'react'
import Image from 'next/image';
import useSound from 'use-sound';
import gsap from 'gsap';

interface ButtonProps {
  value: string;
    functions?: () => void;
}
const Button = ({value,functions}:ButtonProps) => {
    const buttonRef1 = useRef<HTMLButtonElement>(null);
    const [play] = useSound('/sounds/click.mp3', { volume: 1 });

    const handleClick = () => {
        play();

        // Animate the button with GSAP
        if (buttonRef1.current) {
            gsap.fromTo(buttonRef1.current,
                { scale: 1 },
                { scale: 0.2, duration: 0.1, yoyo: true, repeat: 1, ease: 'power1.inOut' }
            );
        }

        if (functions) {
            functions();
        }
    };
  return (
    <button 
    ref={buttonRef1} 
    onClick={handleClick} 
    className='bg-black flex flex-row items-center h-fit border-t-2 border-l-1 border-white/50 
                    shadow-sm shadow-white/30 cursor-pointer 
                    text-white px-2 py-4 rounded-lg mt-4 hover:bg-gray-800 transition duration-300'>
                        <Image 
                            src={'/yut_pattern.png'}
                            alt='floral decoration'
                            width={30}
                            height={40}
                            className=" "
                        />
                        <span className='md:text-2xl text-xl'>{value}</span>
                        <Image 
                            src={'/yut_pattern.png'}
                            alt='floral decoration'
                            width={30}
                            height={40}
                            className=" rotate-z-180"
                        />
                    </button>
  )
}

export default Button