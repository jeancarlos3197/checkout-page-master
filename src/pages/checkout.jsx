import React, { Component } from "react";
/* import Button from "../components/button"; */
/* import Quantity from "../components/quantity"; */
/* import Input from "../components/input"; */
/* import CheckBox from "../components/select"; */
import "../styles/index.css";
import ContactInformation from "../containers/contact-information";
import ShippingAddress from "../containers/shipping-address";
import Product from "../containers/product";
import DescriptionPrice from "../components/description-price";

export class Checkout extends Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-3xl font-montserrat font-[700] text-gray-title mt-16 mb-12">
          Checkout
        </h1>
        <main className="flex space-x-[100px]">
          <div className="order-1">
            <ContactInformation />
            <ShippingAddress className={"mt-12"} />
          </div>
          <div className="order-2">
            <Product />
          </div>
        </main>
      </div>
    );
  }
}

export default Checkout;
