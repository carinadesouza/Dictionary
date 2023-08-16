import React from "react";
import { Input } from "antd";

const SearchInput = ({ onSearch }) => {
  const handleSearch = (value) => {
    if (value.trim() !== "") {
      onSearch(value);
    }
  };

  return (
    <Input.Search
      placeholder="Search Word"
      onSearch={handleSearch}
    />
  );
};

export default SearchInput;
