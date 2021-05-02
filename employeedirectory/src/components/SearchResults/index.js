import React, {useState} from "react";
import "./style.css";
// import Table  from "react-bootstrap/Table";
import { CaretUpFill, CaretDownFill } from 'react-bootstrap-icons';

function SearchResults({users}) {
  // sort function a to b b to a
  
  const [firstNameSorting, setFirstNameSorting] = useState("")
  const [lastNameSorting, setLastNameSorting] = useState("")
  const [usersSorted, setUsersSorted] = useState(users)

// Sorts alphabetically by FIRST name
  const handleFirstNameSort= () => {
    if(firstNameSorting === "ascend") {
      setFirstNameSorting("descend")
      const sortedUsers = users.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);
      console.log(usersSorted);
      setUsersSorted(sortedUsers);
    }
    else {
      setFirstNameSorting("ascend");
      const sortedUsers = users.sort((a,b) => (b.name.first > a.name.first) ? 1 : -1)
      setUsersSorted(sortedUsers);
    }
  }
  const handleLastNameSort= () => {
    if(lastNameSorting === "ascend") {
      setLastNameSorting("descend")
      const sortedUsers = users.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1);
      setUsersSorted(sortedUsers);
    }
    else {
      setLastNameSorting("ascend");
      const sortedUsers = users.sort((a,b) => (b.name.last > a.name.last) ? 1 : -1)
      setUsersSorted(sortedUsers);      
    }
  }

  return (
  //  <Table striped bordered hover>
  <div className="container-fluid">
  <table className="table table-hover table-striped w-75 mx-auto">
     <thead>
       <tr>
       <th></th>
       <th>First Name {firstNameSorting === "ascend" ? <CaretUpFill onClick={() => handleFirstNameSort()} /> : <CaretDownFill onClick={() => handleFirstNameSort()}/>}</th>
       <th>Last Name {lastNameSorting === "ascend" ? <CaretUpFill onClick={() => handleLastNameSort()}/> : <CaretDownFill onClick={() => handleLastNameSort()}/>}</th>
       <th>Email</th>
       <th>Phone</th>
       <th>State</th>
       </tr>
     </thead>
     <tbody>
       {/*  destructure users   */}
       {users.map(({login, picture, name, email, phone, location})=> {
         return (
           <tr key={login.uuid}>
             <td>
               <img src={picture.medium} alt={name.first}/>
             </td>
             <td>{name.first}</td>
             <td>{name.last}</td>
             <td>{email}</td>
             <td>{phone}</td>
             <td>{location.state}</td>
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
