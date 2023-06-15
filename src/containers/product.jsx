import React from "react";
import DescriptionPrice from "../components/description-price";
import Quantity from "../components/quantity";
import Backpack from "../utils/backpack.png";
import Shoes from "../utils/shoes.png";
import ShippingTotal from "../components/shipping-total";

export default function Product() {
  return (
    <div className="w-[383px] bg-gray-final px-8 pt-8 pb-4 rounded-xl">
      <div className="flex space-x-5">
        <img
          src={Backpack}
          alt="Backpack"
          className="rounded-xl w-[134.21px] h-[136.27px]"
        />
        <div className="flex flex-col justify-between">
          <DescriptionPrice
            description={"Vintage Backbag"}
            price={94.99}
            priceTotal={54.99}
          />
          <Quantity />
        </div>
      </div>
      <div className="flex space-x-5 mt-7">
        <img
          src={Shoes}
          alt="Shoes"
          className="rounded-xl w-[134.21px] h-[136.27px]"
        />
        <div className="flex flex-col justify-between">
          <DescriptionPrice
            description={"Levi Shoes"}
            price={124.99}
            priceTotal={74.99}
          />
          <Quantity />
        </div>
      </div>
      <ShippingTotal />
    </div>
  );
}
