import { useState, useEffect } from 'react';
import NavBar from './components/nav-bar';
import Movie from './models/movie';
import WatchedMovieList from './components/watched-movie-list';
import Summary from './components/summary';
import AppContainer from './layouts/app-container';
import Box from './layouts/box';
import MovieList from './components/movie-list';
import apiKey from './constants/keys';
import Loader from './components/loader';
import MovieDetails from './components/movie-details';
import useMovies from './hooks/useMovies';

export default function App() {
  const [query, setQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [watched, setWatched] = useState<Movie[]>(function () {
    const watchedMovies: Movie[] = JSON.parse(localStorage.getItem('watched')!);
    return watchedMovies;
  });
  const [movies, loading] = useMovies(query);

  function handleInput(val: string) {
    setQuery(val);
  }

  function selectMovie(movie: Movie) {
    setSelectedMovie(movie);
  }

  function closeMovie() {
    setSelectedMovie(null);
  }

  function addToWatched(movie: Movie, isAdd: boolean) {
    if (isAdd) {
      if (watched.some((mov) => mov.imdbID === movie.imdbID)) return;
      const mov: Movie = {
        imdbID: movie.imdbID,
        Title: movie.Title,
        Poster: movie.Poster,
        Year: movie.Year,
        imdbRating: movie.imdbRating,
        runtime: Number(movie.Runtime?.split(' ').at(0)),
      };
      setWatched((prev) => {
        return [...prev, mov];
      });
    } else {
      setWatched((prev) => {
        return prev.filter((mov) => mov.imdbID !== movie.imdbID);
      });
    }
  }

  function removeMovie(movie: Movie) {
    setWatched((prev) => {
      return prev.filter((mov) => mov.imdbID !== movie.imdbID);
    });
  }

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify([...watched]));
  }, [watched]);

  return (
    <>
      <NavBar movies={movies} onQuery={handleInput} query={query} />
      <AppContainer>
        <Box>
          {loading ? (
            <Loader title='Fetching' />
          ) : (
            <MovieList movies={movies} onSelect={selectMovie} />
          )}
        </Box>
        <Box>
          {selectedMovie ? (
            <MovieDetails
              selectedMovie={selectedMovie}
              onClose={closeMovie}
              onAdd={addToWatched}
              watchedMovies={watched}
            />
          ) : (
            <>
              <Summary watched={watched} />
              <WatchedMovieList watched={watched} remove={removeMovie} />
            </>
          )}
        </Box>
      </AppContainer>
    </>
  );
}
