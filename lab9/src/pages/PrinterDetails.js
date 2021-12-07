import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button/Button";
import Wrapper from "../components/Cards/Wrapper";
import Heading from "../components/Heading/Heading";
import { GlobalContext } from "../context/GlobalState";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

const PrinterDetails = (route) => {
  let history = useHistory();

  const dispatch = useDispatch();

  const { printers } = useContext(GlobalContext);

  const [selectedPrinter, setSelectedPrinter] = useState({
    id: null,
    brand: null,
    power: null,
    price: null
  });

  const currentPrinterId = route.match.params.id;

  useEffect(() => {
    const printerId = currentPrinterId;
    const selectedPrinter = printers.find(
      (currentPrinterTraversal) => currentPrinterTraversal.id === parseInt(printerId)
    );
    setSelectedPrinter(selectedPrinter);
  }, [currentPrinterId, printers]);

  return (
    <Wrapper>
      <Heading printer={selectedPrinter} />
      <div className="flex justify-end py-8">
        <Button label="Go back" onClick={() => history.push("/catalog")} />
        <Button label="Add to cart" onClick={() => dispatch(addToCart(selectedPrinter))} />
      </div>
    </Wrapper>
  );
};

export default PrinterDetails;
