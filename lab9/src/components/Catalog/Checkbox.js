import React from "react";

const Checkbox = ({ brand, onChange, checked }) => {
  return (
    <div>
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          className="form-checkbox"
          onChange={onChange}
          checked={checked}
        />
        <span className="ml-2">{brand}</span>
      </label>
    </div>
  );
};

export default Checkbox;
