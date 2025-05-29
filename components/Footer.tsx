import React from "react";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-20 pb-10 px-6 md:px-12 overflow-hidden">
      {/* Floral Decorations */}
      <Image
        src="/pattern3.png"
        alt="floral left"
        width={350}
        height={350}
        className="absolute top-0 left-0 opacity-40 pointer-events-none"
      />
      <Image
        src="/pattern3.png"
        alt="floral right"
        width={350}
        height={350}
        className="absolute bottom-0 right-0 opacity-40 pointer-events-none"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-6">
        <h2 className="text-2xl font-semibold">Yutecultr</h2>
        <p className="text-gray-400 max-w-md font-sans text-sm">
          Streetwear infused with culture, made for the youth redefining the movement.
        </p>

        {/* Links */}
        <div className="flex gap-6 mt-4 text-sm flex-wrap font-sans justify-center">
          <a href="#store" className="hover:text-gray-200 transition">Store</a>
          <a href="#about" className="hover:text-gray-200 transition">About</a>
          <a href="#community" className="hover:text-gray-200 transition">Community</a>
          <a href="#contact" className="hover:text-gray-200 transition">Contact</a>
        </div>

        {/* Socials */}
        <div className="flex gap-4 mt-4 text-xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaTwitter />
          </a>
          <a href="https://t.me/yourgroupname" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaTelegram />
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-6">&copy; {new Date().getFullYear()} Yutecultr. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
