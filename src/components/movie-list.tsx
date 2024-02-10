import React from 'react';
import Movie from '../models/movie';
import MovieListPoster from './movie-list-poster';

const MovieList: React.FC<{ movies: Movie[] }> = ({ movies }) => {
  return (
    <ul className='list'>
      {movies?.map((movie) => (
        <MovieListPoster movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
