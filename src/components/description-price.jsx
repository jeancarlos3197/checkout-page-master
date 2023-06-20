import React from "react";

export default function DescriptionPrice({ description, price, priceTotal }) {
  return (
    <div>
      <p className="font-montserrat text-gray-title text-xs xl:text-base lg:text-xs mb-2 block w-full">
        {description}
      </p>
      <p className="inline xl:text-base lg:text-sm text-sm font-montserrat text-orange-product">
        ${priceTotal}
      </p>
      <p className="inline ml-3 xl:text-xs lg:text-[10px] text-[10px] font-montserrat line-through text-gray-title">
        ${price}
      </p>
    </div>
  );
}
