import Header from "../../commom/header/Header";
import "./Home.css";
import React, { useEffect, useState } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

function Home(props) {
  const [upComingMovies, setUpcomingMovies] = useState([]);
  const [releasedMovies, setReleasedMovies] = useState([]);

  const getUpcomingMovies = () => {
    fetch(props.baseUrl + `movies?status=PUBLISHED`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUpcomingMovies(data.movies);
        console.log(data.movies);
      });
  };

  const getReleasedMovies = () => {
    fetch(props.baseUrl + `movies?status=RELEASED`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setReleasedMovies(data.movies);
      });
  };

  const getMovieClickHandler = (movieId) => {
    return function () {
      props.history.push({
        pathname: "/movie/" + movieId,
      });
    };
  };

  useEffect(() => {
    getUpcomingMovies();
    getReleasedMovies();
    // getGenres();
    // getArtists();
  }, []);

  return (
    <div>
      <Header {...props} />
      <div className="upcoming-movies-heading">Upcoming Movies</div>
      <GridList className="upcoming-movies" cols={6} cellHeight={250}>
        {upComingMovies.map((movie) => (
          <GridListTile key={movie.poster_url}>
            <img src={movie.poster_url} alt={movie.title} />
            <GridListTileBar title={movie.title} />
          </GridListTile>
        ))}
      </GridList>

      <div className="released-movies-container">
        <GridList
          className="released-movies"
          cols={4}
          cellHeight={350}
          spacing={16}
        >
          {releasedMovies.map((movie) => (
            <GridListTile
              key={movie.poster_url}
              className="clickable-movie-poster"
              onClick={getMovieClickHandler(movie.id)}
            >
              <img src={movie.poster_url} alt={movie.title} />
              <GridListTileBar
                title={movie.title}
                subtitle={`Release Date: ${new Date(
                  movie.release_date
                ).toDateString()}`}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

export default Home;
