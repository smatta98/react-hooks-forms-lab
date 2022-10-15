import React from "react";

function Filter({ onCategoryChange, searchItems, setSearchItems }) {

function handleSearchChange(e){
  setSearchItems(e.target.value)
}

  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={handleSearchChange} value = {searchItems}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;


// Once you've determined which component should hold the state for this feature, set up your initial state, and connect that state to the input field. 
// Remember, we're trying to make this input a controlled input — so the input's value should always be in sync with state.

// After you've connected the input to state, you'll also need to find a way to set state when the input changes. 
// To get the test passing, you'll need to use a prop called onSearchChange as a callback.