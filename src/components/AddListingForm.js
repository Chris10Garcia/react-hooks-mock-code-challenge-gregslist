import React, { useState } from "react"


function AddListingForm({addListing}){
    const [formData, setFormData] = useState(
    {
        "description": "",
        "image": "",
        "location" : ""
    })
  

function handleFormChange(e){
        const key = e.target.name
        const value = e.target.value
    setFormData({
        ...formData, [key] : value
    })
    }

function handleFormSubmit(e){
    e.preventDefault()
    addListing(formData)
}
    

    const inputsArray = []
    for (const key in formData){
        inputsArray.push(
            <input type="text" placeholder = {key} name= {key} key = {key} onChange = {handleFormChange}/>)
    }

    return(
      <form onSubmit = {handleFormSubmit}>
        {inputsArray}
        <button type="submit">Add listing</button>
      </form>
    )
  }


  export default AddListingForm