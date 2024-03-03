import { useState } from 'react';
import NavBar from './components/nav-bar';
import Movie from './models/movie';
import WatchedMovieList from './components/watched-movie-list';
import Summary from './components/summary';
import AppContainer from './layouts/app-container';
import Box from './layouts/box';
import MovieList from './components/movie-list';
import Loader from './components/loader';
import MovieDetails from './components/movie-details';
import useMovies from './hooks/use-movies';
import useLocalStorage from './hooks/use-local-storage';

export default function App() {
  const [query, setQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(
    undefined
  );

  const [movies, loading] = useMovies(query);
  const [watched, setWatched] = useLocalStorage();

  function handleInput(val: string) {
    setQuery(val);
  }

  function selectMovie(movie: Movie) {
    setSelectedMovie(movie);
  }

  function closeMovie() {
    setSelectedMovie(undefined);
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
