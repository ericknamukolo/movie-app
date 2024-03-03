import { useEffect, useState } from 'react';
import Movie from '../models/movie';

export default function useLocalStorage(): [
  Movie[],
  React.Dispatch<React.SetStateAction<Movie[]>>
] {
  const [watched, setWatched] = useState<Movie[]>(function () {
    const watchedMovies: Movie[] = JSON.parse(localStorage.getItem('watched')!);
    return watchedMovies;
  });

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify([...watched]));
  }, [watched]);

  return [watched, setWatched];
}
