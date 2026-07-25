import MovieCard from './MovieCard';

function MovieList({ movie }) {
  if (movie.length === 0) {
    <p className="text-danger">No Movie Record Is Found</p>;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {movie.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MovieList;
