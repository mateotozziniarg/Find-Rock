import React, { Component } from "react";
import SearchBar from "./components/search-bar.js";
import SearchResult from "./components/search-result.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class PageSearchResult extends Component {
  state = {
    busqueda: ""
  };
  componentDidMount() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", " ");

    this.setState({
      busqueda: search
    });
  }
  changeHandle = e => {
    this.props.history.push("/busqueda?" + e.target.value);
    this.setState({
      busqueda: e.target.value
    });
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        <SearchResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
