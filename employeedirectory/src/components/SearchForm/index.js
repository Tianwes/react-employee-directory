import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        {/* <label htmlFor="employees"></label> */}
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employees"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Search the Employee Directory"
          id="employees"
        />
      </div>
    </form>
  );
}

export default SearchForm;
