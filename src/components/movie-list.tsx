import React from 'react';
import Movie from '../models/movie';
import MovieListPoster from './movie-list-poster';

export default function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <ul className='list'>
      {movies?.map((movie) => (
        <MovieListPoster movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
