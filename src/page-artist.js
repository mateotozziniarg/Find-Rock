import React, { Component } from "react";
import SearchBar from "./components/search-bar.js";
import "./App.css";
import "./components/page-artist.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SimilarArtist from "./components/similar-artist.js";
import Loading from "./components/loading.js";
import Error from "./components/error.js";

class PageArtist extends Component {
  state = {
    busqueda: "",
    data: {
      artist: {
        image: [
          {
            "#text": ""
          },
          {
            "#text": ""
          },
          {
            "#text": ""
          },
          {
            "#text": ""
          },
          {
            "#text": ""
          }
        ],
        bio: {
          summary: ""
        },
        similar: {
          artist: [
            {
              name: "",
              url: "",
              image: [
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" }
              ]
            }
          ]
        }
      }
    }
  };
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.fetchData();
    }
  }
  changeHandle = e => {
    this.setState({
      busqueda: e.target.value
    });
  };
  submitHandle = e => {
    this.props.history.push("/busqueda?" + e.target.value);
    console.log("asd", e.target.value);
    this.setState({
      busqueda: e.target.value
    });
  };
  componentDidMount() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", " ");
    this.fetchData();
  }
  fetchData = async () => {
    let searchUrl = this.props.history.location.search.substr(1);
    let url =
      "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" +
      searchUrl +
      "&api_key=fb50f088e024e67e4644b85d48428084&format=json";
    this.setState({
      loading: true
    });
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data, "Data de API");
      if (data.error) {
        this.setState({
          dataError: data,
          error: true,
          loading: false
        });
      } else {
        this.setState({
          data: data,
          loading: false,
          error: false
        });
      }
    } catch (error) {
      console.log("Error", error);
      this.setState({
        loading: false,
        timeout: true,
        dataError: error
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        {this.state.error && (
          <Error mensaje={this.state.dataError["message"]} />
        )}
        {this.state.timeout && (
          <Error mensaje={this.state.dataError["message"]} />
        )}
        <SearchBar
          onChange={this.changeHandle}
          onSubmit={this.submitHandle}
          busqueda={this.state.busqueda}
        />
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3"></div>
            <div className="col-md-6 ">
              <img
                src={this.state.data.artist.image[3]["#text"]}
                alt={this.state.data.artist.name}
                className="pic picArtist margenes50"
              />

              <h2>{this.state.data.artist.name}</h2>
              <p>{this.state.data.artist.bio.summary}</p>
            </div>
          </div>
          <div className="row centrar">
            <SimilarArtist data={this.state.data.artist.similar.artist} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageArtist;
