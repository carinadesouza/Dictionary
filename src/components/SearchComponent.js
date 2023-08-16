
import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
const SearchComponent = ({  onShowSearchHistory }) => {
  return (
    <div className="search-container">
    
      <Button
  className="button"
  type="default"
  onClick={onShowSearchHistory}
>
  Search History
</Button>
      <br/><br/>
    </div>
  );
};

export default SearchComponent;


