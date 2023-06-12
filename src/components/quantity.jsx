import React from "react";
import PlusSvg from "./../utils/plus.svg";
import MinusSvg from "./../utils/minus.svg";

export default function Quantity() {
  return (
    <div className="border border-gray-3 flex px-3 py-3.5 rounded-xl w-[134px]">
      <button className="w-5 h-5 bg-gray-5 rounded m-auto">
        <img className="w-3 m-auto" src={MinusSvg} alt="Minus" />
      </button>
      <p className="font-montserrat font-[600] ml-7 mr-7">1</p>
      <button className="w-5 h-5 bg-gray-5 rounded m-auto">
        <img className="w-3 m-auto" src={PlusSvg} alt="Plus" />
      </button>
    </div>
  );
}
