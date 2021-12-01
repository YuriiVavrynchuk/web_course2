import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button/Button";
import Wrapper from "../components/Cards/Wrapper";
import Heading from "../components/Heading/Heading";
import { GlobalContext } from "../context/GlobalState";

const PrinterDetails = (route) => {
  let history = useHistory();

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
    <div>
      <Wrapper>
        <Heading printer={selectedPrinter} />
        <div className="flex justify-end py-8">
          <Button label="Go back" onClick={() => history.push("/catalog")} />
          <Button label="Add to cart" />
        </div>
      </Wrapper>
    </div>
  );
};

export default PrinterDetails;
