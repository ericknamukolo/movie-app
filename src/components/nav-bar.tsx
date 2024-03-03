import React, { useEffect, useRef } from 'react';
import Movie from '../models/movie';

export default function NavBar({
  movies,
  onQuery,
  query,
}: {
  movies: Movie[];
  onQuery: (value: string) => void;
  query: string;
}) {
  const inputEl = useRef<any>(null);

  useEffect(() => {
    inputEl.current.focus();
  });
  return (
    <nav className='nav-bar'>
      <div className='logo'>
        <span role='img'>🍿</span>
        <h1>Movie App</h1>
      </div>
      <input
        className='search'
        type='text'
        placeholder='Search movies...'
        value={query}
        onChange={(e) => onQuery(e.target.value)}
        ref={inputEl}
      />
      <p className='num-results'>
        Found <strong>{movies.length}</strong> results
      </p>
    </nav>
  );
}
