import { useState, useEffect } from 'react';
import NavBar from './components/nav-bar';
import Movie from './models/movie';
import WatchedMovieList from './components/watched-movie-list';
import Summary from './components/summary';
import AppContainer from './layouts/app-container';
import Box from './layouts/box';
import MovieList from './components/movie-list';
import StarRating from './components/star-rating';
import apiKey from './constants/keys';
import Loader from './components/loader';

const tempMovieData: Movie[] = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
  },
  {
    imdbID: 'tt0133093',
    Title: 'The Matrix',
    Year: '1999',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
  },
  {
    imdbID: 'tt6751668',
    Title: 'Parasite',
    Year: '2019',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
  },
];

const tempWatchedData: Movie[] = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: 'tt0088763',
    Title: 'Back to the Future',
    Year: '1985',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr: any) =>
  arr.reduce(
    (acc: number, cur: number, i: any, arr: string | any[]) =>
      acc + cur / arr.length,
    0
  );

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('batman');
  const [watched, setWatched] = useState(tempWatchedData);
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  useEffect(() => {
    fetchMovies(query);
  }, []);

  async function fetchMovies(query: string) {
    try {
      const res: Response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`
      );

      const data = await res.json();
      if (data.Error !== undefined) return setMovies([]);
      setMovies(data.Search);
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  }

  function handleInput(val: string) {
    setQuery(val);
    fetchMovies(val);
  }

  return (
    <>
      <NavBar movies={movies} onQuery={handleInput} query={query} />
      <AppContainer>
        <Box>
          {loading ? (
            <Loader title='Fetching' />
          ) : (
            <MovieList movies={movies} />
          )}

          <StarRating maxRating={10} />
        </Box>
        <Box>
          <Summary
            avgImdbRating={avgImdbRating}
            avgRuntime={avgRuntime}
            avgUserRating={avgUserRating}
            watched={watched}
          />
          <WatchedMovieList watched={watched} />
        </Box>
      </AppContainer>
    </>
  );
}
