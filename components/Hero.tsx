import React from 'react'

import Button from './Button';
import ButtonWhite from './ButtonWhite';
import BottomBarGlass from './Bottombar';

const Hero = () => {
  return (
    <div className='w-screen relative h-screen object-cover bg-fixed bg-center' style={{backgroundImage: 'url(/yute_hero.png)'}}>
        <div className='w-screen h-screen z-10 absolute bg-black/30'></div>
        <div className='flex flex-col items-center justify-center md:px-0 px-2 text-white z-20 absolute w-full h-full'>
            <h1 className='md:text-7xl text-4xl font-bold text-center '>More Than Fashion — It’s a Movement.</h1>
            <h2 className='font-sans md:text-2xl text-xs text-center  md:max-w-4xl'>
                Elevate your everyday look with tees made from the finest materials, 
                designed for comfort and confidence. Delivered to you in just 24 hours.
            </h2>
            <div className='flex md:flex-row flex-col   items-center md:gap-4'>
                <Button value='Shop Now' />
                <ButtonWhite value='See Best Offers - 25% off '/>
            </div>
        </div>
        <BottomBarGlass/>
    </div>
  )
}

export default Hero