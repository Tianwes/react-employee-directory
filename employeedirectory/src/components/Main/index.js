import React from "react";
import API from "../../utils/API";
import "./style.css";
import SearchBar from "../SearchBar";
import SearchResults from "../SearchResults";

// My need to add !(state= & extends)! because I'm passing in 
// employee api information
// Main needs to be dynamic??

class Main extends React.Component {
  state = {
    users: [],
    search: ""
  }
// Pull (props)??? from searchBar.js ???
// Then put that in App.js ????

// After component is inserted into tree loading data from remote endpoint (the API, I presume)
  componentDidMount() {
    // (from API.JS)
   API.getUsers()
      .then(res => {
        this.setState({ users: res.data.results })
        console.log(this.state.users)
      })
  }

render() {
    return (
      <div>
        <SearchBar />
        <SearchResults
        users={this.state.users} />


      </div>
    );
}
}

export default Main;
