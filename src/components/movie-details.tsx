/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Movie from '../models/movie';
import apiKey from '../constants/keys';
import Loader from './loader';
import StarRating from './star-rating';

export default function MovieDetails({
  selectedMovie,
  onClose,
  onAdd,
  watchedMovies,
}: {
  selectedMovie: Movie;
  onClose: () => void;
  onAdd: (movie: Movie, isAdd: boolean) => void;
  watchedMovies: Movie[];
}) {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    fetchMovieDetails();
  }, [selectedMovie]);

  useEffect(() => {
    document.title = `Movie | ${selectedMovie.Title}`;

    return function () {
      document.title = 'Movie App';
    };
  }, [selectedMovie]);

  async function fetchMovieDetails() {
    try {
      setLoading(true);
      const res: Response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&i=${selectedMovie.imdbID}`
      );

      const data = await res.json();
      setMovie(data as Movie);
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  }

  function isAdded(): boolean {
    return watchedMovies.some((val) => val.imdbID === movie?.imdbID);
  }
  return loading ? (
    <Loader title='Fetching' />
  ) : (
    <div className='details'>
      <header>
        <button className='btn-back' onClick={onClose}>
          &larr;
        </button>
        <img src={movie?.Poster} alt={`${movie?.Title} Poster`} />
        <div className='details-overview'>
          <h2>{movie?.Title}</h2>
          <p>
            {movie?.Released} &bull; {movie?.Runtime}
          </p>
          <p>
            <span>⭐</span>
            {movie?.imdbRating} IMDb rating
          </p>
        </div>
      </header>

      <section>
        <div className='rating'>
          <StarRating maxRating={10} />
          <button className='btn-add' onClick={() => onAdd(movie!, !isAdded())}>
            {isAdded() ? '- Remove from library' : '+ Add to library'}
          </button>
        </div>

        <p>
          <em>{movie?.Plot}</em>
        </p>
        <p>Starring {movie?.Actors}</p>
        <p>Directed by {movie?.Director}</p>
      </section>
    </div>
  );
}
