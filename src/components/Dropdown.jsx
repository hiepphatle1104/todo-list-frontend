import React from "react";

const Dropdown = ({ children, btn }) => {
  return (
    <div className="dropdown dropdown-end">
      <div>{btn}</div>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm mt-2">
        {children}
      </ul>
    </div>
  );
};

export default Dropdown;
