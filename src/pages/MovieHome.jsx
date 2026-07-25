import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import "/.env";

import MovieList from '../component/MovieList';
import img from '../images/1.jpg';
import img1 from '../images/2.jpg';
import img2 from '../images/3.jpg';
import img3 from '../images/h.jfif';
import img4 from '../images/5.jfif';
import img5 from '../images/6.jfif';
import img6 from '../images/7.jfif';
import img7 from '../images/15.jfif';
import img8 from '../images/16.jfif';
import img9 from '../images/17.jfif';
import img10 from '../images/18.jfif';

function MovieHome() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const search = useRef();

  const fetchMovie = async (query) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${VITE_OMDB_API_KEY}&s=${query}`,
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
    fetchMovie('Avenger');
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
      NEW SECTION 1: Hero 
      ============================================ */}
      <div className="container-fluid hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                <span>Stream</span> Our Movies Latest <br /> Whenever{' '}
                <span>Wherever</span>
              </h1>
              <p className="hero-description">
                A modern movies website to explore trending films, view details,
                watch trailers, and discover ratings, cast information, and
                personalized recommendations in a clean, user-friendly
                interface.
              </p>
              <button className="btn btn-primary hero-btn">
                <i className="bx bx-play-circle"></i> Browse Movies
              </button>

              <div className="new-movies-section">
                <h6 className="new-movies-title">🎬 New Movies</h6>
                <div className="new-movies-grid">
                  <div className="movie-card-small">
                    <div className="movie-card-image">
                      <img src={img} alt="Action Movie" />
                    </div>
                    <div className="movie-card-info">
                      <h6>
                        Action <br /> <span>One Piece</span>
                      </h6>
                      <p className="rating">
                        <i className="bx bxs-star"></i> 8.3
                      </p>
                    </div>
                  </div>
                  <div className="movie-card-small">
                    <div className="movie-card-image">
                      <img src={img1} alt="Comedy Movie" />
                    </div>
                    <div className="movie-card-info">
                      <h6>
                        Comedy <br /> <span>The Family Plan 2</span>
                      </h6>
                      <p className="rating">
                        <i className="bx bxs-star"></i> 5.9
                      </p>
                    </div>
                  </div>
                  <div className="movie-card-small">
                    <div className="movie-card-image">
                      <img src={img2} alt="Drama Movie" />
                    </div>
                    <div className="movie-card-info">
                      <h6>
                        Drama <br /> <span>My Demon</span>
                      </h6>
                      <p className="rating">
                        <i className="bx bxs-star"></i> 7.7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-featured">
              <div className="featured-card">
                <div className="featured-image">
                  <img src={img3} alt="Featured Movie" />
                  <div className="featured-overlay">
                    <i className="bx bx-play-circle"></i>
                  </div>
                </div>
                <div className="featured-content">
                  <h6>
                    Mufasa <span>[2026]</span>
                  </h6>
                  <p>
                    The Lion King tells the origin story of Mufasa, his rise to
                    power, friendships, struggles, and destiny.
                  </p>
                  <div className="featured-actions">
                    <button className="play-btn">
                      <i className="bx bx-play"></i>
                    </button>
                    <button className="heart-btn">
                      <i className="bx bxs-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================
      NEW SECTION 2: Carousel 
      ============================================ */}
      <div className="container carousel-section">
        <div className="section-header">
          <h2 id="main-heading">
            Top <span>Latest</span> Movie
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="carousel-wrapper">
          <div
            className="carousel slide"
            data-bs-ride="carousel"
            id="movieCarousel"
            data-bs-interval="3000"
          >
            {/* Carousel Indicators */}
            {/* <ol className="carousel-indicators">
              <li
                className="active"
                data-bs-slide-to="0"
                data-bs-target="#movieCarousel"
              ></li>
              <li data-bs-slide-to="1" data-bs-target="#movieCarousel"></li>
              <li data-bs-slide-to="2" data-bs-target="#movieCarousel"></li>
            </ol> */}

            {/* Carousel Items */}
            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className="carousel-item active">
                <div className="carousel-content">
                  <div className="carousel-poster">
                    <img
                      src={img4}
                      alt="Alita Movie Poster"
                      className="poster-image"
                    />
                  </div>
                  <div className="carousel-info">
                    <h3 className="carousel-title">Alita</h3>
                    <div className="carousel-meta">
                      <span className="badge imdb-badge">⭐ IMDb 9.0</span>
                      <span className="badge year-badge">2024</span>
                      <span className="badge genre-badge">Sci-Fi</span>
                    </div>
                    <p className="carousel-description">
                      A sci-fi action film about a cyborg girl, Alita, who
                      awakens with no memory and discovers her powerful past
                      while fighting to protect those she loves.
                    </p>
                    <div className="carousel-details">
                      <span>
                        <i className="bx bx-time"></i> 2h 32min
                      </span>
                      <span>
                        <i className="bx bx-category"></i> Action, Thriller
                      </span>
                      <span>
                        <i className="bx bx-shield"></i> 16+
                      </span>
                    </div>
                    <button className="btn btn-watch">
                      <i className="bx bx-play-circle"></i> Watch Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="carousel-content">
                  <div className="carousel-poster">
                    <img
                      src={img5}
                      alt="Avatar Movie Poster"
                      className="poster-image"
                    />
                  </div>
                  <div className="carousel-info">
                    <h3 className="carousel-title">Avatar</h3>
                    <div className="carousel-meta">
                      <span className="badge imdb-badge">⭐ IMDb 8.8</span>
                      <span className="badge year-badge">2024</span>
                      <span className="badge genre-badge">Sci-Fi</span>
                    </div>
                    <p className="carousel-description">
                      A sci-fi epic where humans explore Pandora, and Jake Sully
                      bonds with the Na'vi, facing conflict, love, and a battle
                      to protect their world.
                    </p>
                    <div className="carousel-details">
                      <span>
                        <i className="bx bx-time"></i> 2h 28min
                      </span>
                      <span>
                        <i className="bx bx-category"></i> Sci-Fi, Action
                      </span>
                      <span>
                        <i className="bx bx-shield"></i> 13+
                      </span>
                    </div>
                    <button className="btn btn-watch">
                      <i className="bx bx-play-circle"></i> Watch Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="carousel-item">
                <div className="carousel-content">
                  <div className="carousel-poster">
                    <img
                      src={img6}
                      alt="Barroz Movie Poster"
                      className="poster-image"
                    />
                  </div>
                  <div className="carousel-info">
                    <h3 className="carousel-title">Barroz</h3>
                    <div className="carousel-meta">
                      <span className="badge imdb-badge">⭐ IMDb 8.6</span>
                      <span className="badge year-badge">2024</span>
                      <span className="badge genre-badge">Adventure</span>
                    </div>
                    <p className="carousel-description">
                      A fantasy adventure film directed by Mohanlal, about a
                      loyal guardian protecting Vasco da Gama's treasure for
                      centuries, waiting for the rightful heir.
                    </p>
                    <div className="carousel-details">
                      <span>
                        <i className="bx bx-time"></i> 2h 49min
                      </span>
                      <span>
                        <i className="bx bx-category"></i> Adventure, Drama
                      </span>
                      <span>
                        <i className="bx bx-shield"></i> 13+
                      </span>
                    </div>
                    <button className="btn btn-watch">
                      <i className="bx bx-play-circle"></i> Watch Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#movieCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-icon" aria-hidden="true">
                <i className="bx bx-chevron-left"></i>
              </span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#movieCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-icon" aria-hidden="true">
                <i className="bx bx-chevron-right"></i>
              </span>
            </button>
          </div>
        </div>
      </div>

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

      {/* ============================================
      NEW SECTION 5: WHY CHOOSE US
      ============================================ */}
      <div className="container-fluid why-section">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <span className="why-badge">Why Choose Us</span>
              <h2 className="why-title">
                The Ultimate <span>Movie Experience</span>
              </h2>
              <div className="why-line"></div>
              <p className="why-description">
                We bring the magic of cinema to your fingertips with
                cutting-edge technology and a passion for storytelling. Discover
                why millions trust us for their daily entertainment.
              </p>

              <div className="why-features">
                <div className="why-feature">
                  <div className="why-feature-icon">
                    <i className="bx bx-check-circle"></i>
                  </div>
                  <div>
                    <h6>Curated Collections</h6>
                    <p>Hand-picked movies for every mood and occasion</p>
                  </div>
                </div>

                <div className="why-feature">
                  <div className="why-feature-icon">
                    <i className="bx bx-check-circle"></i>
                  </div>
                  <div>
                    <h6>Ad-Free Experience</h6>
                    <p>
                      Enjoy uninterrupted streaming with premium subscription
                    </p>
                  </div>
                </div>

                <div className="why-feature">
                  <div className="why-feature-icon">
                    <i className="bx bx-check-circle"></i>
                  </div>
                  <div>
                    <h6>Exclusive Content</h6>
                    <p>Access to original movies and early releases</p>
                  </div>
                </div>

                <div className="why-feature">
                  <div className="why-feature-icon">
                    <i className="bx bx-check-circle"></i>
                  </div>
                  <div>
                    <h6>24/7 Support</h6>
                    <p>Our team is always here to help you</p>
                  </div>
                </div>
              </div>

              <Link to="/About" className="btn btn-why">
                Learn More <i className="bx bx-right-arrow-alt"></i>
              </Link>
            </div>

            <div className="col-12 col-lg-6">
              <div className="why-image-wrapper">
                <img src={img10} alt="Movie Experience" className="why-image" />
                <div className="why-image-play">
                  <i className="bx bx-play-circle"></i>
                </div>
                <div className="why-image-badge">
                  <i className="bx bxs-star"></i>
                  <span>4.8 ★</span>
                  <span>Rated by 250K+ Users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================
      NEW SECTION 6: LATEST NEWS & UPDATES
      ============================================ */}
      <div className="container-fluid news-section">
        <div className="container py-5">
          <div className="text-center mb-4">
            <span className="news-badge">Stay Updated</span>
            <h2 className="news-title">
              Latest <span>News & Updates</span>
            </h2>
            <div className="news-line"></div>
            <p className="news-subtitle">
              Get the latest scoop on new releases, events, and exclusive
              content
            </p>
          </div>

          <div className="news-grid">
            {/* News Card 1 */}
            <div className="news-card">
              <div className="news-image">
                <img src={img9} alt="News" />
                <span className="news-tag">New Release</span>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span>
                    <i className="bx bx-calendar"></i> Dec 15, 2024
                  </span>
                  <span>
                    <i className="bx bx-time"></i> 5 min read
                  </span>
                </div>
                <h5>
                  Blockbuster Movie "Aurora" Set to Release This Christmas
                </h5>
                <p>
                  The highly anticipated sci-fi epic promises stunning visuals
                  and a gripping storyline...
                </p>
                <Link to="" className="news-readmore">
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </Link>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="news-card">
              <div className="news-image">
                <img src={img8} alt="News" />
                <span className="news-tag exclusive">Exclusive</span>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span>
                    <i className="bx bx-calendar"></i> Dec 12, 2024
                  </span>
                  <span>
                    <i className="bx bx-time"></i> 3 min read
                  </span>
                </div>
                <h5>
                  Our Platform to Feature Exclusive Director's Cut of
                  Fan-Favorite
                </h5>
                <p>
                  Get ready for an extended version with never-before-seen
                  footage and commentary...
                </p>
                <Link to="" className="news-readmore">
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </Link>
              </div>
            </div>

            {/* News Card 3 */}
            <div className="news-card">
              <div className="news-image">
                <img src={img7} alt="News" />
                <span className="news-tag event">Event</span>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span>
                    <i className="bx bx-calendar"></i> Dec 10, 2024
                  </span>
                  <span>
                    <i className="bx bx-time"></i> 2 min read
                  </span>
                </div>
                <h5>Annual Movie Awards Gala - Live Streaming This Month</h5>
                <p>
                  Join us for the biggest movie celebration of the year with
                  celebrity appearances...
                </p>
                <Link to="" className="news-readmore">
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <Link to="" className="btn btn-news">
              View All News <i className="bx bx-right-arrow-alt"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieHome;
