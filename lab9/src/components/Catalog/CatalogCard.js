import React from "react";
import { Link } from "react-router-dom";
import Printer from "../../../src/images/printer.jpg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions";

const CatalogCard = (props) => {
  const printerId = props.printer.printerId;

  const dispatch = useDispatch();
  console.log(props.printer.id);

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
      <div className="flex-auto text-center pt-6">
        <Link to={`/catalog/${printerId}`} title="View more">
          <button className="bg-gray-200 hover:bg-blue-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center">
            View more
          </button>
        </Link>
        <button
          className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center"
          onClick={() => {console.log(props.printer);dispatch(addToCart(props.printer))}}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CatalogCard;
