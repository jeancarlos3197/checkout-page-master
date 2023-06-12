import React, { Component } from "react";
/* import Button from "../components/button"; */
/* import Quantity from "../components/quantity"; */
/* import Input from "../components/input"; */
/* import CheckBox from "../components/select"; */
import "../styles/index.css";
import ContactInformation from "../containers/contact-information";
import ShippingAddress from "../containers/shipping-address";

export class Checkout extends Component {
  render() {
    return (
      <div>
        <h1 className="text-3xl font-montserrat font-[700] text-gray-title mt-16">
          Checkout
        </h1>
        <div>
          <ContactInformation className={"mt-12"} />
          <ShippingAddress className={"mt-12"} />
        </div>
      </div>
    );
  }
}

export default Checkout;
