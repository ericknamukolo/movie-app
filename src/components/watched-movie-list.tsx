import React from 'react';
import MoviePoster from './movie-poster';
import Movie from '../models/movie';

const WatchedMovieList: React.FC<{ watched: Movie[] }> = ({ watched }) => {
  return (
    <ul className='list'>
      {watched.map((movie) => (
        <MoviePoster movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default WatchedMovieList;
