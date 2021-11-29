import React, { createContext, useEffect, useState } from "react";
import printersApi from "../api/api";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [printersTypes, setPrinterTypes] = useState([]);
  const [filters, setFilters] = useState([]);
  const [printers, setPrinters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    printersApi
      .getPrinterTypes()
      .then(({ data }) => setPrinterTypes(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    printersApi
      .getPrinters(filters)
      .then(({ data }) => {
        setPrinters(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [filters]);

  return (
    <GlobalContext.Provider
      value={{
        printers,
        searchKeyword,
        filters,
        isLoading,
        printersTypes,
        setSearchKeyword,
        setFilters,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
