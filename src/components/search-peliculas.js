import React, { Component } from "react";
import ArtistCard from "./artist-card.js";
import Loading from "./loading.js";
import Error from "./error.js";

class SearchPeliculas extends Component {
  state = {
    loading: false,
    error: null,
    timeout: null,
    data: {
      activity: "",
      accessibility: "",
      type: "",
      participants: "",
      price: "",
      link: "",
      key: ""
    }
  };
  componentDidMount() {
    this.fetchData("https://www.boredapi.com/api/activity");
  }
  fetchData = async url => {
    this.setState({
      loading: true,
      data: {
        activity: "",
        accessibility: "",
        type: "",
        participants: "",
        price: "",
        link: "",
        key: ""
      }
    });
    const response = await fetch(url);
    const data = await response.json();
    console.log(data["activity"], "Data de API");
    this.setState({
      loading: false,
      data: {
        activity: data["activity"],
        accessibility: data["accessibility"],
        type: data["type"],
        participants: data["participants"],
        price: data["price"],
        link: data["link"],
        key: data["key"]
      }
    });
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
          <div className="row" onClick={this.fetchData}>
            {this.state.data["price"]}
            {this.state.data["activity"]}
          </div>
          <h3>{this.props.busqueda}</h3>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchPeliculas;
