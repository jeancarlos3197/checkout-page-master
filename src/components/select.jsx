import React from "react";
import World from "./../utils/world.svg";

export default function SelectCountry({ className }) {
  return (
    <div className={className}>
      <label
        for="first_name"
        className="block mb-2 xl:text-sm lg:text-[10px] text-[10px] font-montserrat font-[600] text-gray-2 dark:text-gray-2"
      >
        Country
      </label>
      <div className="flex border border-gray-3 rounded-lg pl-3.5 pr-3.5 ">
        <picture className="m-auto">
          <img className="xl:w-5 lg:w-3 w-3 m-auto" src={World} alt="Mail" />
        </picture>
        <select
          id="first_name"
          className="xl:text-base lg:text-xs text-xs font-montserrat font-[600] rounded-lg w-full dark:bg-white dark:placeholder-gray-3 dark:text-gray-3 outline-none appearance-none bg-arrow-down focus:bg-arrow-up bg-no-repeat bg-right  bg-gray-5 bg-[length:21px_21px] p-2.5"
          placeholder="John"
          required
        >
          <option value={""} disabled selected hidden>
            Your country..
          </option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
    </div>
  );
}
