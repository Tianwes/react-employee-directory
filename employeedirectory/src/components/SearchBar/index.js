import React from "react";
import "./style.css";
// import searchReturn from "./utils/API.js"
// import SearchResults from "../SearchResults";

function SearchBar({ handleInputChange }) {
  
  return (
    <form className="search">
        <input
          onChange={e =>handleInputChange(e)}
          name="employees"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Search the Employee Directory"
          id="employeeSearchBar"
        />
    </form>
  );
}

export default SearchBar;