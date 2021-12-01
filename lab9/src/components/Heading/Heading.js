import React from "react";
import Printer from "../../images/printer.jpg";

const Heading = (props) => {
  return (
    <div className="flex p-24 pt-0 pb-0 ">
      <img src={Printer} alt="" className="sm:w-1/2" />
      <div className="tet-left ml-20">
        <p className="text-3xl text-black font-bold mt-10">{props.printer.brand}</p>
        <p className="text-lg text-black font-normal my-4">
          Model: {props.printer.model}
        </p>
        <p className="text-lg text-balck font-normal my-4">
          Power: {props.printer.power}
        </p>
        <p className="text-lg text-balck font-normal my-4">
          Price: {props.printer.price}
        </p>
      </div>
    </div>
  );
};

export default Heading;
