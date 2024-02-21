import Movie from '../models/movie';

export default function MovieDetails({
  selectedMovie,
  onClose,
}: {
  selectedMovie: Movie;
  onClose: () => void;
}) {
  return (
    <div className='details' onClick={onClose}>
      {selectedMovie.imdbID}
    </div>
  );
}
