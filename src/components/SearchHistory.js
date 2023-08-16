
import React from "react";
const SearchHistory = ({ searchHistory }) => {
 console.log("Search history prop:", searchHistory);
  return ( 
    
    <div className="search-history">
      <h3>Search History:</h3>
      <ul>
        {searchHistory.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;

