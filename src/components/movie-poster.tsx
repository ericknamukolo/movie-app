import React from 'react';
import Movie from '../models/movie';

export default function MoviePoster({
  movie,
  remove,
}: {
  movie: Movie;
  remove: (movie: Movie) => void;
}) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
          <button onClick={() => remove(movie)}>❌</button>
        </p>
      </div>
    </li>
  );
}
