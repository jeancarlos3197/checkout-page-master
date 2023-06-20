import React from "react";
import Input from "../components/input";
import SelectCountry from "../components/select";
import User from "../utils/user.svg";
import Home from "../utils/home.svg";
import City from "../utils/city.svg";
import Folder from "../utils/folder.svg";

export default function ShippingAddress({ className }) {
  return (
    <div className={className}>
      <p className="xl:text-lg lg:text-sm text-sm font-montserrat font-[600] text-gray-1">
        Shipping address
      </p>
      <Input
        className={"mt-3.5"}
        label={"Full name"}
        imgSvg={User}
        placeholder={"Your full name..."}
      />
      <Input
        className={"mt-3.5"}
        label={"Address"}
        imgSvg={Home}
        placeholder={"Your address..."}
      />
      <Input
        className={"mt-3.5"}
        label={"City"}
        imgSvg={City}
        placeholder={"Your city..."}
      />
      <div className="flex justify-center space-x-8 mt-3.5">
        <SelectCountry className={"w-2/4"} />
        <Input
          className={"w-2/4"}
          label={"Postal code"}
          imgSvg={Folder}
          placeholder={"Your postal code..."}
        />
      </div>
    </div>
  );
}
