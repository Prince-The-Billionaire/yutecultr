'use client'
import React, { useRef } from 'react'
import Image from 'next/image';
import useSound from 'use-sound';
import gsap from 'gsap';

interface ButtonProps {
    value?: string;
    functions?: () => void
}

const ButtonWhite = ({ value, functions }: ButtonProps) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [play] = useSound('/sounds/click.mp3', { volume: 1 });

    const handleClick = () => {
        play();

        // Animate the button with GSAP
        if (buttonRef.current) {
            gsap.fromTo(buttonRef.current,
                { scale: 1 },
                { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1, ease: 'power1.inOut' }
            );
        }

        if (functions) {
            functions();
        }
    };

    return (
        <button
            ref={buttonRef}
            onClick={handleClick}
            className='border-white border-2 
            px-2 py-3 mt-3 cursor-pointer 
            rounded-lg flex flex-row items-center transition-transform duration-100'
        >
            <Image
                src={'/yut_pattern.png'}
                alt='floral decoration'
                width={30}
                height={40}
                className=""
            />
            <span className='md:text-2xl text-xl'>{value}</span>
        </button>
    )
}

export default ButtonWhite;
