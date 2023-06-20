import React, { Component } from "react";
import Button from "../components/button";
/* import Quantity from "../components/quantity"; */
/* import Input from "../components/input"; */
/* import CheckBox from "../components/select"; */
import "../styles/index.css";
import ContactInformation from "../containers/contact-information";
import ShippingAddress from "../containers/shipping-address";
import Product from "../containers/product";

export class Checkout extends Component {
  render() {
    return (
      <>
        <div className="flex flex-col items-center mb-40 mx-60">
          <h1 className="xl:text-3xl lg:text-2xl text-2xl font-montserrat font-[700] text-gray-title mt-16 mb-12 self-start">
            Checkout
          </h1>
          <main className="flex xl:space-x-[100px] xl:flex-row lg:flex-col flex-col">
            <div className="xl:order-1 lg:order-2 order-2 mt-8">
              <ContactInformation />
              <ShippingAddress className={"mt-12"} />
              <div className="flex items-center space-x-2.5 mt-5">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="xl:w-5 lg:w-4 w-4 xl:h-5 lg:h-4 h-4 border-gray-3 rounded-md"
                />
                <label
                  htmlFor=""
                  className="text-gray-2 font-montserrat xl:text-xs lg:text-[10px] text-[10px]"
                >
                  Save this information for next time
                </label>
              </div>
              <div className="flex justify-end mt-6">
                <Button />
              </div>
            </div>
            <div className="xl:order-2 lg:order-1 order-1">
              <Product />
            </div>
          </main>
        </div>
        <footer class="mt-auto font-montserrat text-gray-4 text-sm flex justify-center mb-6">
          created by <a href="/">username</a> - devChallenges.io
        </footer>
      </>
    );
  }
}

export default Checkout;
