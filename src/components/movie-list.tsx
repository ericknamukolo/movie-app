import React from 'react';
import Movie from '../models/movie';
import MovieListPoster from './movie-list-poster';

const MovieList: React.FC<{ movies: Movie[] }> = ({ movies }) => {
  return (
    <ul className='list'>
      {movies?.map((movie) => (
        <MovieListPoster movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default MovieList;
