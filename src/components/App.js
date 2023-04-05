import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import AddListingForm from "./AddListingForm";
import { SortListingLocation } from "./SortListingLocation";



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

function addListing(formData){

  fetch(jsonURL, {
    method: "POST",
    headers: {"Content-Type" : "application/json"},
    body : JSON.stringify(formData)
  })
    .then(r => r.json()).then(data=> setListingsList([...listingsList, data]))
}

function searchListing(search){
  setSearchValue(search)
}

function handleSortClick() {
  
  const sortedList = [...listingsList]
  sortedList.sort((a,b) => {
    const textA = a.location.toUpperCase()
    const textB = b.location.toUpperCase()
    return (textA < textB) ? -1 : (textA > textB) ? 1: 0
  })
  setListingsList(sortedList)

}

const filteredListing = searchValue === "" 
  ? listingsList
  : listingsList.filter(listing => listing.description.toUpperCase().includes(searchValue.toUpperCase()))

  return (
    <div className="app">
      <Header searchListing={searchListing} />
      <AddListingForm addListing={addListing} />
      <SortListingLocation handleSortClick={handleSortClick}/>
      <ListingsContainer listingsList = {filteredListing} deleteListing={deleteListingRequest} />
      
    </div>
  );
}

export default App;
