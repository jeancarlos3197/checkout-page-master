import React from "react";

export default function ShippingTotal() {
  return (
    <div className="mt-24">
      <div>
        <hr className="border-gray-line mb-2.5" />
        <div className="flex justify-between">
          <p className="font-montserrat text-gray-1 text-lg">Shipping</p>
          <p className="font-montserrat text-gray-1 text-sm">$19</p>
        </div>
      </div>
      <div>
        <hr className="border-gray-line mb-2.5" />
        <div className="flex justify-between">
          <p className="font-montserrat text-gray-1 text-lg">Total</p>
          <p className="font-montserrat text-gray-1 text-sm">$148.98</p>
        </div>
      </div>
    </div>
  );
}
