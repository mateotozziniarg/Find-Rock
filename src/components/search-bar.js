import React from "react";
import "./search-bar.css";
import logo from "../logoFindRock.svg";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = e => {
    e.preventDefault();
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-2">
            <Link to="/">
              <img className="logo-barra" src={logo} alt="" />
            </Link>
          </div>
          <col-md-4>
            <form
              className="form-inline"
              onSubmit={this.handleSubmit}
              name="Form"
            >
              <div className="busqueda">
                <input
                  name="busqueda"
                  type="text"
                  id="buscar"
                  value={this.props.busqueda}
                  placeholder="Busca una banda"
                  onChange={this.props.onChange}
                />
              </div>
            </form>
          </col-md-4>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default SearchBar;
