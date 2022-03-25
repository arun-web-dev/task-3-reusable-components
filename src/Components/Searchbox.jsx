import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        onChange={searchChange}
        className="pa3 dib ba b--green bg-lightest-blue f3 tc"
        type="search"
        placeholder="search recipes"
      />
    </div>
  );
};

export default SearchBox;
