import React from "react";

export function SortListingLocation({handleSortClick}) {
  



  return (
    <div>
      Sort Listings Alphabetically By Location <button 
                                                    onClick={handleSortClick}

                                                >Sort</button>
    </div>);

}


export default SortListingLocation