import React from "react";

const SearchBox = (props) => {
  console.log(props);
  return (
    <div className="pa2">
      <input
        className="pa3 dib ba b--green bg-lightest-blue f3 tc"
        type="search"
        placeholder="search recipes"
      />
    </div>
  );
};

export default SearchBox;
