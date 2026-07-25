import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <>
      <div className="col-md-3 mb-3">
        <div className="movie">
          <img src={movie.Poster} alt={movie.Title} />
          <i className="bx bxs-right-arrow play"></i>
          <div className="move">
            <div className="mov">
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="mov">
              <h5>{movie.Title.substring(0, 30)}</h5>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
          </div>
          <div className="detail">
            <h6>
              <i className="bx bxs-category"></i> {movie.Type}
            </h6>
            <h6>
              <i className="bx bxs-calendar-alt"></i> {movie.Year}
            </h6>
          </div>
          <div className="others">
            <p>
              Length
              <br />
              <b>1:37</b>
            </p>
            <p>
              Lang
              <br />
              <b>Eng</b>
            </p>
            <p>
              Rating
              <br />
              <b>6.4</b>
            </p>
            <p>
              Review
              <br />
              <b>45+</b>
            </p>
          </div>
          <Link to={`/movie/${movie.imdbID}`} className="btn">
            More Detail
          </Link>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
