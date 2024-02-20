import React from 'react';
import Movie from '../models/movie';

export default function Summary({
  watched,
  avgImdbRating,
  avgRuntime,
  avgUserRating,
}: {
  watched: Movie[];
  avgImdbRating: number;
  avgUserRating: number;
  avgRuntime: number;
}) {
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
}
