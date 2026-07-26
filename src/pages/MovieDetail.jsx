import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
 const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  
  useEffect(() => {
    async function getMovie() {
      try {
        setLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=b30a7c6f&i=${id}`,
        );
        const data = await res.json();
        setMovie(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      } finally {
        setLoading(false);
      }
    }
    getMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p className="loading-text">Loading movie details...</p>
      </div>
    );
  }

  if (!movie || movie.Response === 'False') {
    return (
      <div className="container error-container">
        <div className="alert alert-danger text-center">
          <h4>Movie not found!</h4>
          <p>Please try searching for another movie.</p>
          <Link to="/" className="btn btn-primary">
            Go Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container movie-detail-container">
        <div className="movie-header">
          <h2 id="main-heading" className="main-heading">
            Movie <span>Detail</span> Page
          </h2>
          <Link to="/" className="back-button">
            <i className="bx bx-arrow-back"></i> Back to Search
          </Link>
        </div>

        <div className="movie-grid">
          {/* Left Column - Movie Poster & Quick Info */}
          <div className="movie-poster-section">
            <div className="movie-poster-card">
              <div className="poster-wrapper">
                <img
                  src={
                    movie.Poster !== 'N/A'
                      ? movie.Poster
                      : '/placeholder-poster.jpg'
                  }
                  alt={movie.Title}
                  className="movie-poster"
                  onError={(e) => {
                    e.target.src = '/placeholder-poster.jpg';
                  }}
                />
                <div className="poster-overlay">
                  <i className="bx bxs-play-circle play-icon"></i>
                </div>
              </div>

              <div className="movie-title-section">
                <h3 className="movie-title">{movie.Title}</h3>
                <div className="movie-rating">
                  <i className="bx bxs-star star-icon"></i>
                  <i className="bx bxs-star star-icon"></i>
                  <i className="bx bxs-star star-icon"></i>
                  <i className="bx bxs-star star-icon"></i>
                  <i className="bx bxs-star-half star-icon"></i>
                  <span className="rating-value">
                    {movie.imdbRating || 'N/A'}
                  </span>
                </div>
              </div>

              <div className="movie-meta-info">
                <div className="meta-item">
                  <i className="bx bxs-category"></i>
                  <span>{movie.Type || 'N/A'}</span>
                </div>
                <div className="meta-item">
                  <i className="bx bxs-calendar-alt"></i>
                  <span>{movie.Year || 'N/A'}</span>
                </div>
                <div className="meta-item">
                  <i className="bx bxs-time"></i>
                  <span>{movie.Runtime || 'N/A'}</span>
                </div>
              </div>

              <div className="movie-stats">
                <div className="stat-item">
                  <span className="stat-label">Language</span>
                  <span className="stat-value">{movie.Language || 'N/A'}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Rating</span>
                  <span className="stat-value">
                    {movie.imdbRating || 'N/A'}
                  </span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Reviews</span>
                  <span className="stat-value">{movie.imdbVotes || 'N/A'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Movie Details */}
          <div className="movie-details-section">
            {/* Plot Section */}
            <div className="detail-card plot-card">
              <div className="card-header">
                <h5>
                  <b>Plot Summary</b>
                </h5>
              </div>
              <div className="card-body">
                <p>{movie.Plot || 'No plot available'}</p>
              </div>
            </div>

            {/* Details Grid */}
            <div className="details-grid">
              {movie.Actors && movie.Actors !== 'N/A' && (
                <div className="detail-card">
                  <div className="card-header">
                    <h5>
                      <b>Actors</b>
                    </h5>
                  </div>
                  <div className="card-body">{movie.Actors}</div>
                </div>
              )}

              {movie.Director && movie.Director !== 'N/A' && (
                <div className="detail-card">
                  <div className="card-header">
                    <h5>
                      <b>Director</b>
                    </h5>
                  </div>
                  <div className="card-body">{movie.Director}</div>
                </div>
              )}

              {movie.Writer && movie.Writer !== 'N/A' && (
                <div className="detail-card">
                  <div className="card-header">
                    <h5>
                      <b>Writer</b>
                    </h5>
                  </div>
                  <div className="card-body">{movie.Writer}</div>
                </div>
              )}

              {movie.Genre && movie.Genre !== 'N/A' && (
                <div className="detail-card">
                  <div className="card-header">
                    <h5>
                      <b>Genre</b>
                    </h5>
                  </div>
                  <div className="card-body">{movie.Genre}</div>
                </div>
              )}

              {movie.Awards && movie.Awards !== 'N/A' && (
                <div className="detail-card">
                  <div className="card-header">
                    <h5>
                      <b>Awards</b>
                    </h5>
                  </div>
                  <div className="card-body">{movie.Awards}</div>
                </div>
              )}

              {movie.BoxOffice && movie.BoxOffice !== 'N/A' && (
                <div className="detail-card">
                  <div className="card-header">
                    <h5>
                      <b>Box Office</b>
                    </h5>
                  </div>
                  <div className="card-body">{movie.BoxOffice}</div>
                </div>
              )}

              {movie.Country && movie.Country !== 'N/A' && (
                <div className="detail-card">
                  <div className="card-header">
                    <h5>
                      <b>Country</b>
                    </h5>
                  </div>
                  <div className="card-body">{movie.Country}</div>
                </div>
              )}

              {movie.DVD && movie.DVD !== 'N/A' && (
                <div className="detail-card">
                  <div className="card-header">
                    <h5>
                      <b>DVD Release</b>
                    </h5>
                  </div>
                  <div className="card-body">{movie.DVD}</div>
                </div>
              )}

              {movie.Released && movie.Released !== 'N/A' && (
                <div className="detail-card">
                  <div className="card-header">
                    <h5>
                      <b>Released</b>
                    </h5>
                  </div>
                  <div className="card-body">{movie.Released}</div>
                </div>
              )}

              {movie.Rated && movie.Rated !== 'N/A' && (
                <div className="detail-card">
                  <div className="card-header">
                    <h5>
                      <b>Rated</b>
                    </h5>
                  </div>
                  <div className="card-body">{movie.Rated}</div>
                </div>
              )}

              {movie.Metascore && movie.Metascore !== 'N/A' && (
                <div className="detail-card">
                  <div className="card-header">
                    <h5>
                      <b>Metascore</b>
                    </h5>
                  </div>
                  <div className="card-body">{movie.Metascore}</div>
                </div>
              )}

              {movie.Production && movie.Production !== 'N/A' && (
                <div className="detail-card">
                  <div className="card-header">
                    <h5>
                      <b>Production</b>
                    </h5>
                  </div>
                  <div className="card-body">{movie.Production}</div>
                </div>
              )}

              {movie.Website && movie.Website !== 'N/A' && (
                <div className="detail-card">
                  <div className="card-header">
                    <h5>
                      <b>Website</b>
                    </h5>
                  </div>
                  <div className="card-body">
                    <a
                      href={movie.Website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {movie.Website}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
