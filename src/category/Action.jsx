import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import MovieList from '../component/MovieList';

function Action() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const search = useRef();
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  const fetchMovie = async (query) => {
    setLoading(true);
    try {
      const res = await fetch(
       `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
      );
      const data = await res.json();
      console.log(data);
      setMovie(data.Search || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie('Action');
  }, []);

  const searchmovie = (e) => {
    e.preventDefault();
    const query = search.current.value.trim();
    if (query) {
      fetchMovie(query);
      search.current.value = '';
    }
  };

  return (
    <>
      {/* ============================================
      NEW SECTION 3: CATEGORY QUICK LINKS
      ============================================ */}
      <div className="container-fluid category-section">
        <div className="container py-5">
          <div className="text-center mb-4">
            <span className="category-badge">Browse by Category</span>
            <h2 className="category-title">
              Explore <span>Movie Genres</span>
            </h2>
            <div className="category-line"></div>
          </div>

          <div className="category-grid">
            <div className="category-card action">
              <div className="category-icon">
                <i className="bx bx-rocket"></i>
              </div>
              <h6>Action</h6>
              <span>245 Movies</span>
              <div className="category-overlay">
                <Link to="/Action">
                  Explore <i className="bx bx-right-arrow-alt"></i>
                </Link>
              </div>
            </div>

            <div className="category-card comedy">
              <div className="category-icon">
                <i className="bx bx-smile"></i>
              </div>
              <h6>Comedy</h6>
              <span>189 Movies</span>
              <div className="category-overlay">
                <Link to="/Comedy">
                  Explore <i className="bx bx-right-arrow-alt"></i>
                </Link>
              </div>
            </div>

            <div className="category-card drama">
              <div className="category-icon">
                <i className="bx bx-movie"></i>
              </div>
              <h6>Drama</h6>
              <span>312 Movies</span>
              <div className="category-overlay">
                <Link to="/Drama">
                  Explore <i className="bx bx-right-arrow-alt"></i>
                </Link>
              </div>
            </div>

            <div className="category-card sci-fi">
              <div className="category-icon">
                <i className="bx bx-planet"></i>
              </div>
              <h6>Sci-Fi</h6>
              <span>156 Movies</span>
              <div className="category-overlay">
                <Link to="/Scifi">
                  Explore <i className="bx bx-right-arrow-alt"></i>
                </Link>
              </div>
            </div>

            <div className="category-card horror">
              <div className="category-icon">
                <i className="bx bx-ghost"></i>
              </div>
              <h6>Horror</h6>
              <span>134 Movies</span>
              <div className="category-overlay">
                <Link to="/Horror">
                  Explore <i className="bx bx-right-arrow-alt"></i>
                </Link>
              </div>
            </div>

            <div className="category-card romance">
              <div className="category-icon">
                <i className="bx bx-heart"></i>
              </div>
              <h6>Romance</h6>
              <span>178 Movies</span>
              <div className="category-overlay">
                <Link to="/Romance">
                  Explore <i className="bx bx-right-arrow-alt"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================
      NEW SECTION 4: Movie Explore 
      ============================================ */}
      <div className="container explore-section" id="Explore">
        <div className="section-header">
          <h2 id="main-heading">
            Movie <span>Explore</span> Hubs
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="search-container">
          <form onSubmit={searchmovie} className="search-form">
            <input
              type="text"
              ref={search}
              className="search-input"
              placeholder="Search for movies..."
            />
            <button type="submit" className="search-btn">
              <i className="bx bxs-search"></i>
            </button>
          </form>
        </div>

        <div className="movies-grid-container">
          {loading ? (
            <div className="loading-movies">
              <div className="loader"></div>
              <p>Loading movies...</p>
            </div>
          ) : movie.length > 0 ? (
            <MovieList movie={movie} />
          ) : (
            <div className="no-movies">
              <i className="bx bx-movie"></i>
              <p>No movies found. Try searching for something else!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Action;
