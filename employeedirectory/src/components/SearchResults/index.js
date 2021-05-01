import React from "react";
import "./style.css";
import Table  from "react-bootstrap/Table";
import { ArrowUp, ArrowDown } from 'react-bootstrap-icons';

function SearchResults({users}) {
  const[order, setOrder] = "ascend";
  // sort function a to b b to a
  // destructure users
  return (
   <Table striped bordered hover>
     <thead>
       <tr>
       <th>#</th>
       <th>Name{order === "ascend" ? "new component icon arrow down" : "new comp arrow up"}</th>
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
   </Table>
  );
}

export default SearchResults;
