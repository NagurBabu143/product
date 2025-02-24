import React from "react";
import "./MovieList.css";

const movies = [
  { id: 1, name: "Avatar", price: 10, image: "/images/avatar.jpg" },
  { id: 2, name: "Inception", price: 12, image: "/images/inception.jpg" },
  { id: 3, name: "Interstellar", price: 15, image: "/images/interstellar.jpg" },
];

const MovieList = ({ setSelectedMovie, setStep }) => {
  return (
    <div className="movie-list">
      <h2>Select a Movie</h2>
      <div className="movies">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => {
              setSelectedMovie(movie);
              setStep(2);
            }}
          >
            <img src={movie.image} alt={movie.name} />
            <h3>{movie.name}</h3>
            <p>${movie.price} per seat</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
