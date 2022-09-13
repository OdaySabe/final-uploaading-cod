import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

class Catalog extends Component {
  remove = (movie) => {
    this.props.removeMove(this.props.match.match.params.userName, movie);
  };
  add = (movie) => {
    this.props.insertMovie(this.props.match.match.params.userName, movie);
  };
  userState = (match) => {
    if (match) {
      return (
        <div>
          <div className="UserDetails">
            <h1>{this.props.match.match.params.userName}</h1>
            <h1>
              Budget :
              {" " +
                this.props.userData[this.props.match.match.params.userName]
                  .budget +
                " "}
              $
            </h1>
          </div>
          <hr></hr>
          <h3>{this.props.match.match.params.userName} movies</h3>
          {this.listOfMovies()}
        </div>
      );
    }
  };
  listOfMovies = () => {
    let JSX;
    JSX = this.props.Movies.map((movie) => {
      if (
        this.props.userData[
          this.props.match.match.params.userName
        ].listOfMoves.indexOf(movie.id) != -1
      ) {
        return (
          <div className="addButton">
            <FaWindowClose
              className="remove"
              onClick={(event) => this.remove(movie.id)}
            />
            <Link exact to={"/Movie/" + movie.id}>
              <img className="privateMovie" src={movie.img}></img>
            </Link>
          </div>
        );
      }
    });
    return <div className="listOfMovies">{JSX}</div>;
  };
  search = (movie) => {
    if (movie.title.toLowerCase().includes(this.props.searchText)) {
      return this.props.match ? (
        <div className="deleteButton">
          <FaRegPlusSquare
            className="add"
            onClick={(event) => this.add(movie.id)}
          />
          <Link exact to={"/Movie/" + movie.id}>
            <img className="movie" src={movie.img}></img>
          </Link>
        </div>
      ) : (
        <Link exact to={"/Movie/" + movie.id}>
          <img className="movie" src={movie.img}></img>
        </Link>
      );
    }
  };

  render() {
    return (
      <div>
        {this.userState(this.props.match)}

        <input
          className="searchBar"
          type="text"
          placeholder="Search"
          value={this.props.searchText}
          onChange={this.props.search}
        ></input>

        <hr></hr>
        <h3>Catalog:</h3>
        <div className="catalogmovies">
          {this.props.Movies.map((movie) => {
            return this.search(movie) ? (
              <div>{this.search(movie)}</div>
            ) : (
              <div className="displayNon"></div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Catalog;
