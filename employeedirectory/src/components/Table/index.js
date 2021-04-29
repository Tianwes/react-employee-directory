import React from "react";
import "./style.css";


// My need to add !(state= & extends)! because I'm passing in 
// employee api information
// table needs to be able to change/not static



function Table() {
    return (
<div className="container">
  <h2>Hover Rows</h2>
  <p>The .table-hover className enables a hover state (grey background on mouse over) on table rows:</p>            
  <table className="table table-hover">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>D.O.B</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
        <td>05/23/89</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
        <td>07/06/84</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
        <td>02/19/90</td>
      </tr>
    </tbody>
  </table>
</div>
    );
}
export default Table;
