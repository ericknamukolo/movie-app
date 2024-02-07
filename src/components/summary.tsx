import React from 'react';
import Movie from '../models/movie';

const Summary: React.FC<{
  watched: Movie[];
  avgImdbRating: number;
  avgUserRating: number;
  avgRuntime: number;
}> = ({ watched, avgImdbRating, avgRuntime, avgUserRating }) => {
  return (
    <div className='summary'>
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
};

export default Summary;