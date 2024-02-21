import React from 'react';
import Movie from '../models/movie';
import MovieListPoster from './movie-list-poster';

export default function MovieList({
  movies,
  onSelect,
}: {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}) {
  return (
    <ul className='list'>
      {movies?.map((movie) => (
        <MovieListPoster movie={movie} key={movie.imdbID} onSelect={onSelect} />
      ))}
    </ul>
  );
}
