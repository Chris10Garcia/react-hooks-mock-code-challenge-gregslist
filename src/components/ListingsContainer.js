import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingsList, deleteListing}) {
  return (
    <main>
      <ul className="cards">
        {listingsList.map(listing => 
              <ListingCard key={listing.id} listing={listing} deleteListing={deleteListing}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
