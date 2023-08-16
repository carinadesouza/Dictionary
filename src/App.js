// Import necessary components
import React, { useState, useEffect } from "react";
import { Button } from "antd";
import Header from "./components/Header";
import DictionaryList from "./components/DictionaryList";
import DictionaryModal from "./components/DictionaryModal";
import SearchHistory from "./components/SearchHistory";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";
import "./App.css";

const App = () => {
  const [dictionarys, setDictionarys] = useState([]);
  //const [originalDictionarys, setOriginalDictionarys] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showSearchHistory, setShowSearchHistory] = useState(false); // State for showing/hiding search history
  const [searchHistory, setSearchHistory] = useState([]);
  const handleSaveDictionary = (word,description) => {
    if (!word || !description) return;
    const newDictionary = {
      word: word,
      description: description, 
    };
    const updatedDictionarys = [...dictionarys, newDictionary];

    // Update the state with the new data
    setDictionarys(updatedDictionarys);
    //setOriginalDictionarys(updatedDictionarys);
    setModalVisible(false);

    // Save the updated data to local storage
    localStorage.setItem("dictionarys", JSON.stringify(updatedDictionarys));
  };

  useEffect(() => {
    // Load dictionarys from local storage
    const storedDictionarys = localStorage.getItem("dictionarys");
    if (storedDictionarys) {
      setDictionarys(JSON.parse(storedDictionarys));
     // setOriginalDictionarys(JSON.parse(storedDictionarys));
    }
  
    // Load search history from local storage
    const storedSearchHistory = localStorage.getItem("searchHistory");
    if (storedSearchHistory) {
      setSearchHistory(JSON.parse(storedSearchHistory));
    }
  
    // Load the showSearchHistory flag from local storage
    const storedShowSearchHistory = localStorage.getItem("showSearchHistory");
  }, []);
  
  
  

  const handleSearch = (value) => {
    if (value.trim() === "") {
      return; // Don't add empty strings to search history
    }
    setSearchText(value);
    const updatedSearchHistory = [...searchHistory, value]; 
    //console.log(updatedSearchHistory );
    setSearchHistory(updatedSearchHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedSearchHistory)); 
   
  }
  
  

  const handleReset = () => {
    // Reset all the states to their initial values
    setDictionarys([]);
   // setOriginalDictionarys([]);
    setModalVisible(false);
    setSearchText("");
    // Clear data from local storage
    localStorage.removeItem("dictionarys"); 
  };
  
  const handleDelete = (index) => {
    const updatedDictionarys = [...dictionarys];
    updatedDictionarys.splice(index, 1);
    setDictionarys(updatedDictionarys);
  };

  const handleToggleSearchHistory = () => {
    const updatedShowSearchHistory = !showSearchHistory;
    setShowSearchHistory(updatedShowSearchHistory);
    localStorage.setItem("showSearchHistory", JSON.stringify(updatedShowSearchHistory));
     

  };

  return (
    <Router>
      <div className="App">
        <Header />
        <h2>Lets Create A Word </h2>
        <div className="search-container">
        <SearchInput onSearch={handleSearch} />
          <br /> <br />
          <Link to ="/add-word">
          <Button
            className="button no-click-effect"
            type="primary"
            onClick={() => setModalVisible(true)}
          > Add Word </Button>
            </Link>
          <Button
            className="button"
            type="danger"
            onClick={() => handleReset()}
          > Reset </Button>
          <br />
         
          
          <Button
            className="button no-click-effect"
            type="primary"
            onShowSearchHistory={handleToggleSearchHistory}
            onClick={() => setShowSearchHistory(!showSearchHistory)}
          >     Show Search History </Button>
            
     
       
          {showSearchHistory && <SearchHistory searchHistory={searchHistory} />}
     
          <br />
        </div>

        {searchText == "" ? (
          <DictionaryList
            dictionarys={dictionarys}
            onDelete={handleDelete}
          />
        ) : (
          <SearchResult
            data={dictionarys.filter((item) => {
              if (item.word.includes(searchText)) return true;
              else return false;
            })}
          />
        )}

        <DictionaryModal
          modalVisible={modalVisible}
          handleSaveDictionary={handleSaveDictionary}
          setModalVisible={setModalVisible} 
        />
      </div>
      <Routes>
        <Route
          path="/add-word"
          element={
            <DictionaryModal
              modalVisible={true} 
              handleSaveDictionary={handleSaveDictionary}
              setModalVisible={setModalVisible}
            />
          }
        />
      </Routes>
    </Router>
  );
};
export default App;

