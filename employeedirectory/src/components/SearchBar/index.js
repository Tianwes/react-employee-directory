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

// need searched name to update table

// componentDidMount() {
//   document.title = "Wikipedia Searcher";

//   API.searchTerms(this.state.search)
//     .then(res => {
//       if (res.data.length === 0) {
//         throw new Error("No results found.");
//       }
//       if (res.data.status === "error") {
//         throw new Error(res.data.message);
//       }
//       this.setState({
//         title: res.data[1][0],
//         url: res.data[3][0],
//         error: ""
//       });
//     })
//     .catch(err => this.setState({ error: err.message }));
// }

// handleInputChange = event => {
//   this.setState({ search: event.target.value });
// };

// handleFormSubmit = event => {
//   event.preventDefault();
//   if (!this.state.search) {
//     return;
//   }
//   API.searchTerms(this.state.search)
//     .then(res => {
//       if (res.data.length === 0) {
//         throw new Error("No results found.");
//       }
//       if (res.data.status === "error") {
//         throw new Error(res.data.message);
//       }
//       this.setState({
//         title: res.data[1],
//         url: res.data[3][0],
//         error: ""
//       });
//     })
//     .catch(err => this.setState({ error: err.message }));
// };
// render() {
//   return (
//     <div>
//       <Container style={{ minHeight: "100vh" }}>
//         <h1 className="text-center">Search For Anything on Wikipedia</h1>
//         <Alert type="danger" style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}>
//           {this.state.error}
//         </Alert>
//         <SearchForm
//           handleFormSubmit={this.handleFormSubmit}
//           handleInputChange={this.handleInputChange}
//           results={this.state.search}
//         />
//         <SearchResults
//           title={this.state.title}
//           url={this.state.url}
//         />
//       </Container>
//     </div>
//   );
// }
// }

// export default Search;
