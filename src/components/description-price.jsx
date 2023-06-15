import React from "react";

export default function DescriptionPrice({ description, price, priceTotal }) {
  return (
    <div>
      <p className="font-montserrat text-gray-title text-base mb-2 block w-full">
        {description}
      </p>
      <p className="inline text-base font-montserrat text-orange-product">
        ${priceTotal}
      </p>
      <p className="inline ml-3 text-xs font-montserrat line-through text-gray-title">
        ${price}
      </p>
    </div>
  );
}
