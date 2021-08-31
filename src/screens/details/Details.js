import React, { useState, useEffect, Fragment } from "react";
import Header from "../../commom/header/Header";
import "./Details.css";
import YouTube from "react-youtube";
import RatingStars from "../../commom/RatingStars";

// material-ui imports
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

function Details(props) {
  const [movieDetails, setMovieDetails] = useState();

  const getMovieDetails = () => {
    fetch(props.baseUrl + `movies/${props.match.params.id}`, {
      method: "GET",
      headhers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
      });
  };


  return (
    <div className="details-page-container">
      <Header
        baseUrl={props.baseUrl}
        movieId={props.match.params.id}
        history={props.history}
      />
      
    </div>
  );
}

export default Details;
