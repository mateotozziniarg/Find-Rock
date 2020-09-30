import React from "react";
import "./artist-card.css";
import { Link } from "react-router-dom";

class ArtistCard extends React.Component {
  render() {
    return (
      <div className="col-3">
        <Link to={"/artista?" + this.props.title}>
          <div className="item">
            <img className="pic" src={this.props.img} alt="" />
            <p className="titulo">{this.props.title}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default ArtistCard;
