import React from 'react';
import MoviePoster from './movie-poster';
import Movie from '../models/movie';

export default function WatchedMovieList({ watched }: { watched: Movie[] }) {
  return (
    <ul className='list'>
      {watched.map((movie) => (
        <MoviePoster movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
