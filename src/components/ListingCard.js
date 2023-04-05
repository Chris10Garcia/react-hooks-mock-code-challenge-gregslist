import React from "react";

function ListingCard({listing, deleteListing}) {

  const {id, description, image, location} = listing
  let favorite = true

  function handleFavorite (e){
    e.target.className = favorite ? "emoji-button favorite" : "emoji-button favorite active"
    favorite = !favorite
  }

  function handleDelete(){
    deleteListing(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick = {handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick = {handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick = {handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
