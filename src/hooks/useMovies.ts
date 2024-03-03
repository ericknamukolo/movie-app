import { useEffect, useState } from 'react';
import apiKey from '../constants/keys';
import Movie from '../models/movie';

export default function useMovies(query: string): [Movie[], boolean] {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    fetchMovies(query);
  }, [query]);

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
      setLoading(false); ///////////////////////////////////////
    }
  }
  return [movies, loading];
}
