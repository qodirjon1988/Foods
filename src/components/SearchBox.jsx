import React from "react";

const SearchBox = ({searchfield, searchChanged}) => {
    return  <div className="search_box tc">
        <h1 className="tc">Taomlar</h1>
        <input type="search" className="shadow-2 bn pa2 bg-light-blue br2" onChange={searchChanged}  />
  </div>
} 

export default SearchBox;