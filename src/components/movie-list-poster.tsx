import React from 'react';
import Movie from '../models/movie';

export default function MovieListPoster({
  movie,
  onSelect,
}: {
  movie: Movie;
  onSelect: (movie: Movie) => void;
}) {
  return (
    <li key={movie.imdbID} onClick={() => onSelect(movie)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
