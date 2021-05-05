import React from "react";
import API from "../../utils/API";
import "./style.css";
import SearchBar from "../SearchBar";
import SearchResults from "../SearchResults";


class Main extends React.Component {
  state = {
    users: [],
    search: "",
    filteredUsers: []
  }

  componentDidMount() {
    // (from API.JS)
   API.getUsers()
      .then(res => {
        this.setState({ users: res.data.results, filteredUsers: res.data.results })
        console.log(this.state.users)
      })
  }

  handleInputChange=(event)=>{
    const searchTerm=event.target.value;
    const filteredUsers=this.state.users.filter(user=>{
      let userObjects = Object.values(user).join("").toLowerCase();
      return userObjects.indexOf(searchTerm.toLowerCase()) !== -1;
    });
    this.setState({ filteredUsers: filteredUsers })
  }

render() {
    return (
      <div>
        <SearchBar handleInputChange={this.handleInputChange} />
        <SearchResults
        users={this.state.filteredUsers} />


      </div>
    );
}

}

export default Main;
