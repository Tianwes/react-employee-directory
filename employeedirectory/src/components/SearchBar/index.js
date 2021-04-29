import React from "react";
import "./style.css";
// import searchReturn from "./utils/API.js"

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchBar(props) {

 
  return (
    <form className="search">
      <div className="form-group">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employees"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Search the Employee Directory"
          id="employeeSearchBar"
        />
      </div>
    </form>
  );
}

export default SearchBar;



