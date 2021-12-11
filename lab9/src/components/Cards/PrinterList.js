import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Button from "../Button/Button";
import NoDataText from "../NoDataText/NoDataText";
import Card from "./Card";

const PrinterList = () => {
  const { printers, searchKeyword } = useContext(GlobalContext);

  const [showMore, setShowMore] = useState(false);

  const filteredPrinters = printers.filter((printer) =>
  printer.brand.toLowerCase().includes(searchKeyword)
  );

  return (
    <React.Fragment>
      {filteredPrinters.length > 0 ? (
        <React.Fragment>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPrinters.slice(0, showMore ? printers.length : 4).map((printer) => (
              <Card key={printer.id} printer={printer} />
            ))}
          </div>
          {filteredPrinters.length > 4 ? (
            <div className="flex justify-center py-8">
              <Button
                onClick={() => setShowMore(!showMore)}
                label={!showMore ? "Show more" : "Show less"}
              />
            </div>
          ) : (
            ""
          )}
        </React.Fragment>
      ) : (
        <NoDataText text="No data" />
      )}
    </React.Fragment>
  );
};

export default PrinterList;
