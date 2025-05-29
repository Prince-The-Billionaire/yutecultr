"use client"
import React, { useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';
import Link from 'next/link';
import Image from 'next/image'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Community', href: '/community' },
  { name: 'About Us', href: '/about' },
];

const GlassNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 
    left-1/2 transform 
    -translate-x-1/2 w-[95%]
     sm:w-[90%] max-w-6xl 
     bg-black/20 backdrop-blur-md border 
     border-white/20 rounded-b-2xl px-6  z-50 shadow-lg">
      <div className="flex justify-between items-center text-white">
        <h1 className="text-xl font-bold tracking-wide uppercase">
            <Image
                src={'/y_logo.png'}
                alt='logo'
                width={60}
                height={60}
            />
        </h1>
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <LuX size={28} /> : <LuMenu size={28} />}
          </button>
        </div>
        <ul className="hidden sm:flex font-sans gap-8 text-sm font-semibold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-gray-300 transition-colors duration-200">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="mt-4 sm:hidden flex flex-col gap-4 text-sm font-medium font-sans text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} onClick={() => setIsOpen(false)} className="block w-full hover:text-gray-300 transition-all duration-150">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default GlassNav;
