import React, { useState } from 'react';
import MovieListPoster from './movie-list-poster';
import Movie from '../models/movie';

const ListBox: React.FC<{ movies: Movie[] }> = ({ movies }) => {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className='box'>
      <button
        className='btn-toggle'
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? '–' : '+'}
      </button>
      {isOpen1 && (
        <ul className='list'>
          {movies?.map((movie) => (
            <MovieListPoster movie={movie} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListBox;
