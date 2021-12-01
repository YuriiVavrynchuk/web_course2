import React from "react";
import { Link } from "react-router-dom";
import Printer from "../../../src/images/printer.jpg";

const CatalogCard = (props) => {
  const printerId = props.printer.id;

  return (
    <div className="w-full bg-black-500 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center border-solid border-2 border-gray-300">
      <div className="mb-8">
        <img className="h-36 w-36" src={Printer} alt="" />
      </div>
      <div className="text-center">
        <p className="text-xl text-black font-bold mb-2">{props.printer.brand}</p>
        <p className="text-base text-white-300 f ont-normal">
          Model: {props.printer.model}
        </p>
        <p className="text-base text-white-300 f ont-normal">
          Power: {props.printer.power}
        </p>
        <p className="text-base text-white-300 f ont-normal">
          Price: {props.printer.price}
        </p>
      </div>
      <div className="flex-auto text-right pt-6">
        <Link to={`/catalog/${printerId}`} title="View more">
          <div className="bg-gray-200 hover:bg-blue-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center">
            View more
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CatalogCard;
