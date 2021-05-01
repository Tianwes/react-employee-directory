import React from "react";
import "./style.css";
import Table  from "react-bootstrap/Table";
// import { caret-up-fill, caret-down-fill } from 'react-bootstrap-icons';

function SearchResults({users}) {
  // const[order, setOrder] = "ascend";
  // sort function a to b b to a
  // destructure users
  return (
  //  <Table striped bordered hover>
  <div className="container-fluid">
  <table className="table table-hover table-striped w-75 mx-auto">
     <thead>
       <tr>
       <th>#</th>
       <th>Name</th>
       {/* goes inside name tag: {order === "ascend" ? "new component icon arrow down" : "new comp arrow up"} */}
       <th>Email</th>
       <th>Phone</th>
       <th>D.O.B</th>
       </tr>
     </thead>
     <tbody>
       {users.map(({login, picture, name, email, phone, dob})=> {
         return (
           <tr key={login.uuid}>
             <td>
               <img src={picture.medium} alt={name.first}/>
             </td>
             <td>{name.first + " " +name.last}</td>
             <td>{email}</td>
             <td>{phone}</td>
             <td>{dob.age}</td>
           </tr>
         )
       } )}
     </tbody>
     </table>
     </div>
  //  </Table>
  );
}

export default SearchResults;
