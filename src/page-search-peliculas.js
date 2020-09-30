import React, { Component } from "react";
import SearchBar from "./components/search-bar.js";
import SearchResult from "./components/search-result.js";
import SearchPelicula from "./components/search-peliculas.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class PageSearchPelicula extends Component {
  state = {
    busqueda: ""
  };
  changeHandle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        <SearchPelicula busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}

export default PageSearchPelicula;
