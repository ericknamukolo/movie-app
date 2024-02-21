import Movie from '../models/movie';

export default function MovieDetails({
  selectedMovie,
}: {
  selectedMovie: Movie;
}) {
  return <div className='details'>{selectedMovie.imdbID}</div>;
}
