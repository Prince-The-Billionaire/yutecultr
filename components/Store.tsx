"use client";
import React from "react";
import StoreCard from "./StoreCard";

const products = [
  {
    name: "Oversized Graphic Tee",
    price: "₦9,500",
    discount: "₦12,000",
    image: "/black_shirt.png",
  },
  {
    name: "Minimalist Street Hoodie",
    price: "₦18,000",
    image: "/white_hoodie.png",
  },
  {
    name: "Yutecultr Cap",
    price: "₦6,000",
    discount: "₦7,500",
    image: "/white_shirt.png",
  },
  {
    name: "Signature Cargo Pants",
    price: "₦16,500",
    image: "/products/product4.jpg",
  },
];

const Store = () => {
  return (
    <section className="w-full px-4 md:px-12 py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-10 text-center">
          Our Store
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {products.map((product, idx) => (
            <StoreCard
              key={idx}
              name={product.name}
              price={product.price}
              discount={product.discount}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Store;
