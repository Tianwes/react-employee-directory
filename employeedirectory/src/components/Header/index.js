import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate divigation link item
function Header() {
  return (
    <div className="container-fluid bg-info shadow text-center h-25">     
     <i className="fas fa-user-friends"></i>
      <h1 className="employee-directory-h1">Employee Directory</h1>
      {/* <i class="far fa-address-book"></i> */}
        <p>You can sort employees by First and Last names</p>
    </div>
  );
}

export default Header;
