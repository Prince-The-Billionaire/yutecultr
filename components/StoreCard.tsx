import React from "react";
import Image from "next/image";
import ButtonWhite from "./ButtonWhite";

interface StoreCardProps {
  name: string;
  price: string;
  image: string;
  discount?: string;
}

const StoreCard: React.FC<StoreCardProps> = ({ name, price, image, discount }) => {
  return (
    <div className="w-full max-w-xs border 
    border-white bg-transparent 
    text-white p-4 rounded-xl 
    flex flex-col gap-2 transition hover:scale-105 duration-200">
      <div className="relative w-full h-64 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="text-lg font-semibold font-sans">{name}</div>
      <div className="flex items-center gap-2 text-base font-sans">
        {discount && (
          <span className="line-through text-gray-500 font-sans">{discount}</span>
        )}
        <span className="text-black font-sans">{price}</span>
      </div>
      <ButtonWhite value="Add To Cart"/>
    </div>
  );
};

export default StoreCard;
