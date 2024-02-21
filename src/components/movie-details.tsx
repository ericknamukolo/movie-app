import { useEffect, useState } from 'react';
import Movie from '../models/movie';
import apiKey from '../constants/keys';

export default function MovieDetails({
  selectedMovie,
  onClose,
}: {
  selectedMovie: Movie;
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    fetchMovieDetails();
  }, []);

  async function fetchMovieDetails() {
    try {
      const res: Response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&i=${selectedMovie.imdbID}&plot=full`
      );

      const data = await res.json();
      setMovie(data as Movie);
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className='details'>
      <button className='btn-back' onClick={onClose}>
        &larr;
      </button>
      {movie?.imdbID}
    </div>
  );
}
