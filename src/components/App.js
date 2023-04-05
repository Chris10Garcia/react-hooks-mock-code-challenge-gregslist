import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
const jsonURL = 'http://localhost:6001/listings'

const [listingsList, setListingsList] = useState([])
const [searchValue, setSearchValue] = useState("")

// get full data once from server
useEffect(() => {
  fetch(jsonURL).then(r => r.json())
  .then(data => setListingsList(data))
}, [])

function deleteListingRequest(id){
  fetch(`${jsonURL}/${id}`, {
    method: "DELETE",
    headers: {"Content-Type" : "application/json"}
  })
  .then(()=>deleteListing(id))
  
  function deleteListing(id){
    const newListings = listingsList.filter(listing => listing.id !== id)
    setListingsList(newListings)
  }
}

function searchListing(search){
  setSearchValue(search)
}

const filteredListing = searchValue === "" 
? listingsList
: listingsList.filter(listing => listing.description.toUpperCase().includes(searchValue.toUpperCase()))

  return (
    <div className="app">
      <Header searchListing={searchListing} />
      <ListingsContainer listingsList = {filteredListing} deleteListing={deleteListingRequest} />
    </div>
  );
}

export default App;
