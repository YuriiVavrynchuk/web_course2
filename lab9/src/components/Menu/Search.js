import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Search = () => {
  const { setSearchKeyword } = useContext(GlobalContext);

  const onSearchChange = (value) => {
    setSearchKeyword(value.trim().replace(/" "/g, "").toLowerCase());
  };

  return (
    <>
      <div className="flex items-center">
        <input
          type="search"
          placeholder="Search by brand.."
          className="-ml-8 pl-10 px-4 py-2 border rounded-lg text-black focus:outline-none focus:border-green-500"
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </>
  );
};

export default Search;
