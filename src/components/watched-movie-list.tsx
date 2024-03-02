import React from 'react';
import MoviePoster from './movie-poster';
import Movie from '../models/movie';

export default function WatchedMovieList({
  watched,
  remove,
}: {
  watched: Movie[];
  remove: (mov: Movie) => void;
}) {
  return (
    <ul className='list'>
      {watched.map((movie) => (
        <MoviePoster movie={movie} key={movie.imdbID} remove={remove} />
      ))}
    </ul>
  );
}
