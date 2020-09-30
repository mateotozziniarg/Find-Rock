import React, { Component } from "react";
import ArtistCard from "./artist-card.js";
import Loading from "./loading.js";
import Error from "./error.js";

class SearchResult extends Component {
  state = {
    loading: false,
    error: null,
    timeout: null,
    data: {
      similarartists: {
        artist: []
      }
    },
    dataError: {
      error: "",
      message: ""
    }
  };
  componentWillReceiveProps(e) {
    let termino = e.busqueda;
    console.log(termino, "11");
    this.fetchData(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" +
        termino +
        "&api_key=fb50f088e024e67e4644b85d48428084&format=json"
    );
  }
  fetchData = async url => {
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

        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((artista, i) => {
              return (
                <ArtistCard
                  img={artista.image[1]["#text"]}
                  title={artista.name}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
