import React from "react";
import "./page-home.css";
import logo from "./logoFindRock.svg";
import { jsxClosingElement } from "@babel/types";
import ReactDOM from "react-dom";
import Modal from "./components/modal.js";

class PageHome extends React.Component {
  handleSubmit = e => {
    e.preventDefault(); //al apretar el boton no hace nada
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };
  handleClick = e => {
    e.preventDefault();
    this.setState({
      modal: true
    });
  };
  onChange = e => {
    this.setState({
      busqueda: e.target.value
    });
  };

  state = {
    busqueda: "",
    modal: false
  };
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img src={logo} alt="" id="logo" />
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
                  placeholder="¿Qué artista te gusta?"
                  onChange={this.onChange}
                />
              </div>
              <div className="actions">
                <button className="btng" type="submit">
                  Buscar artista similar
                </button>
                <button className="btng" onClick={this.handleClick}>
                  EscuelaDevRock
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHome;
