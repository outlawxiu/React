import React, { useState } from "react";
import SearchHeader from "./components/searchHeader/SearchHeader";
import SearchMain from "./components/searchMain/SearchMain";
import SearchResult from "./components/searchResult/SearchResult";
import SearchSuggest from "./components/searchSuggest/SearchSuggest";
import './search.module.scss'
const Search = () => {
  const [keywords, setKeywords] = useState("");
  const [isResult, setIsResult] = useState(false);
  const [searchHistroy, setSearchHistroy] = useState([]);

  const addInHistroy = (keyword) => {
    !searchHistroy.includes(keyword) &&
      setSearchHistroy([...searchHistroy, keyword]);
  };

  return (
    <div className="whole">
      <header>
        <SearchHeader
          keywords={keywords}
          setKeywords={setKeywords}
          setIsResult={setIsResult}
          addInHistroy={addInHistroy}
        ></SearchHeader>
      </header>
      <main>
        {keywords ? (
          isResult ? (
            <SearchResult keywords={keywords}></SearchResult>
          ) : (
            <SearchSuggest
              keywords={keywords}
              setKeywords={setKeywords}
              setIsResult={setIsResult}
              addInHistroy={addInHistroy}
            ></SearchSuggest>
          )
        ) : (
          <SearchMain
            setKeywords={setKeywords}
            setIsResult={setIsResult}
            addInHistroy={addInHistroy}
            searchHistroy={searchHistroy}
          ></SearchMain>
        )}
      </main>
    </div>
  );
};

export default Search;
