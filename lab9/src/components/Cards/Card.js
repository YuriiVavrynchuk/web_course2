import React from "react";
import Printer from "../../images/printer.jpg";

const Card = (props) => {
  return (
    <div className="w-full bg-white-500 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center border-solid border-2 border-gray-800">
      <div className="mb-8">
        <img className="h-36 w-36" src={Printer} alt="" />
      </div>
      <div className="text-center">
        <p className="text-xl text-black font-bold mb-2">{props.printer.brand}</p>
        <p className="text-base text-black-300 f ont-normal">
          Model: {props.printer.model}
        </p>
        <p className="text-base text-black-300 f ont-normal">
          Power: {props.printer.power}
        </p>
        <p className="text-base text-black-300 f ont-normal">
          Price: {props.printer.price}
        </p>
      </div>
    </div>
  );
};

export default Card;
