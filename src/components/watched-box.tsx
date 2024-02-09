import React, { useState } from 'react';
import WatchedMovieList from './movie-list';
import Summary from './summary';
import Movie from '../models/movie';

const average = (arr: any) =>
  arr.reduce(
    (acc: number, cur: number, i: any, arr: string | any[]) =>
      acc + cur / arr.length,
    0
  );

const WatchedBox: React.FC<{ watched: Movie[] }> = ({ watched }) => {
  const [isOpen2, setIsOpen2] = useState(true);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className='box'>
      <button
        className='btn-toggle'
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? '–' : '+'}
      </button>
      {isOpen2 && (
        <>
          <Summary
            avgImdbRating={avgImdbRating}
            avgRuntime={avgRuntime}
            avgUserRating={avgUserRating}
            watched={watched}
          />
          <WatchedMovieList watched={watched} />
        </>
      )}
    </div>
  );
};

export default WatchedBox;
