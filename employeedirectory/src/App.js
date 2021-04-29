import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar"
// import SearchResults from "./components/SearchResults"
import Table from "./components/Table";
import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";

function App() {
  return (
      <div>
        <Header />
        <SearchBar/>
        {/* <SearchResults/> */}
        <Table></Table>
        <Footer />
      </div>
  );
}

export default App;
