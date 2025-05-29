"use client"
import React, { useState } from 'react';
import {
  LuUsers,
  LuShirt,
  LuInfo,
  LuShoppingCart
} from 'react-icons/lu';

const navItems = [
  { label: 'Community', icon: <LuUsers size={20} />, key: 'community' },
  { label: 'Shirt', icon: <LuShirt size={20} />, key: 'shirt' },
  { label: 'Us', icon: <LuInfo size={20} />, key: 'about' },
  { label: 'Cart', icon: <LuShoppingCart size={20} />, key: 'cart' },
];

const BottomBarGlass = () => {
  const [activeTab, setActiveTab] = useState('community');

  return (
    <div className="absolute bottom-0 left-1/2 
    transform -translate-x-1/2 z-50 
    w-[95%] sm:w-[80%] max-w-lg 
    bg-white/10 backdrop-blur-xl border border-white/20 
    rounded-t-2xl px-6 py-3 flex justify-between items-center shadow-lg">
      {navItems.map((item) => (
        <button
          key={item.key}
          onClick={() => setActiveTab(item.key)}
          className={`flex flex-col items-center text-xs cursor-pointer transition-all ${
            activeTab === item.key ? 'text-white' : 'text-gray-400'
          }`}
        >
          {item.icon}
          <span className="mt-1 font-sans">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomBarGlass;
