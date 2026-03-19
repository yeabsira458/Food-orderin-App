import { featuredProducts } from "../data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[75vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* IMAGE CONTAINER - Forced to take up significant height */}
            {item.img && (
              <div className="relative flex-1 w-full h-1/2 max-h-[50%] hover:rotate-[60deg] transition-all duration-500">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
            )}

            {/* TEXT CONTAINER - flex-1 and reduced padding to make room for image */}
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-2 mt-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-2 text-sm md:text-base line-clamp-3">
                {item.desc}
              </p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-red-500 text-white p-2 px-4 rounded-md hover:bg-red-600 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
