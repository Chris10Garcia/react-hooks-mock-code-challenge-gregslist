import React, { useState } from "react";

function Search({searchListing}) {
  const [searchData, setSearchData] = useState("")

  function handleChange(e){
    setSearchData(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchListing(searchData);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchData}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
