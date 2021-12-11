import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import CatalogCard from "../Catalog/CatalogCard";
import NoDataText from "../NoDataText/NoDataText";

const CatalogList = () => {
  const { printers, searchKeyword } = useContext(GlobalContext);

  const filteredPrinters = printers.filter((printer) =>
  printer.brand.toLowerCase().includes(searchKeyword)
  );

  return (
    <React.Fragment>
      {filteredPrinters.length > 0 ? (
        <React.Fragment>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPrinters.map((printer) => (
              <CatalogCard key={printer.id} printer={printer} />
            ))}
          </div>
        </React.Fragment>
      ) : (
        <NoDataText text="No data text" />
      )}
    </React.Fragment>
  );
};

export default CatalogList;
