import React from "react";

export default function Input({ label, imgSvg, placeholder, className }) {
  return (
    <div className={className}>
      <label
        for="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-2"
      >
        {label}
      </label>
      <div className="flex border border-gray-3 rounded-lg pl-3.5">
        <picture className="m-auto">
          <img className="w-5 m-auto" src={imgSvg} alt={label} />
        </picture>
        <input
          type="text"
          className="font-montserrat font-[600] text-base bg-gray-50 border text-gray-1 rounded-lg focus:ring-white focus:border-white block w-full p-2.5 dark:bg-white dark:border-white  dark:placeholder-gray-3 dark:text-gray-1 dark:focus:ring-white dark:focus:border-white outline-none"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}
