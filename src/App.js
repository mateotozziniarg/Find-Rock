import React, { Component } from "react";
import PageSearchResult from "./page-search-result.js";
import PageSearchPeliculas from "./page-search-peliculas.js";
import "./App.css";
import PageHome from "./page-home.js";
import PageArtist from "./page-artist.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/footer.js";
import Layout from "./components/layout.js";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/busqueda" component={PageSearchResult}></Route>
            <Route path="/peliculas" component={PageSearchPeliculas}></Route>
            <Route path="/artista" component={PageArtist}></Route>
            <Route path="/" component={PageHome}></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
