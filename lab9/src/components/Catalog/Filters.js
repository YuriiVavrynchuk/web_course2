import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Checkbox from "./Checkbox";

const Filters = () => {
  const { printersTypes, filters, setFilters } = useContext(GlobalContext);

  const handleToggle = ({ brand }) => {
    if (filters.indexOf(brand) === -1) {
      setFilters([...filters, brand]);
    } else {
      setFilters(filters.filter((n) => n !== brand));
    }
  };

  return (
    <div className="block pb-10 flex space-x-8">
      <p className="text-xl text-gray-500 font-bold">Type filters</p>
      <div className="flex space-x-8 center">
        {printersTypes.map((brand) => (
          <Checkbox
            key={brand}
            brand={brand}
            onChange={() => handleToggle({ brand })}
            checked={filters.indexOf(brand) !== -1 ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default Filters;
