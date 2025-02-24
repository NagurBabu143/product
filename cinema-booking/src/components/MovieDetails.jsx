import React from "react";

const MovieDetails = ({ movie, setStep }) => {
  return (
    <div className="movie-details">
      <h2>{movie.name}</h2>
      <img src={movie.image} alt={movie.name} />
      <p><strong>Description:</strong> A thrilling adventure that captivates the audience.</p>
      <p><strong>Duration:</strong> 2h 30min</p>
      <p><strong>Rating:</strong> 4.8/5</p>
      <button onClick={() => setStep(3)}>Next</button>
    </div>
  );
};

export default MovieDetails;
