import React from "react";
import Input from "../components/input";
import Mail from "../utils/mail.svg";
import Phone from "../utils/phone.svg";

export default function ContactInformation({ className }) {
  return (
    <div className={className}>
      <p className="xl:text-lg lg:text-sm text-sm font-montserrat font-[600] text-gray-1">
        Contact information
      </p>
      <Input
        className={"mt-3.5"}
        label={"E-mail"}
        imgSvg={Mail}
        placeholder={"Enter your email..."}
      />
      <Input
        className={"mt-3.5"}
        label={"Phone"}
        imgSvg={Phone}
        placeholder={"Enter your phone..."}
      />
    </div>
  );
}
