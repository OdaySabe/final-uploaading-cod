import React, { Component } from "react";

class Movies extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.Movies.map((movie) => {
          if (this.props.match.match.params.id == movie.id) {
            return (
              <div className="movieDetails">
                <h1>
                  {movie.title} ({movie.year})
                </h1>
                <img className="movie" src={movie.img}></img>
                <p>{movie.descrShort}</p>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Movies;
