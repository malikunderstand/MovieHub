import { Link } from 'react-router-dom';
function Footer() {
  const subscribe = () => {
    alert('Thanks For Subscribing!');
  };

  return (
    <>
      {/* <!-- premium movie website footer --> */}
      <footer className="movie-footer">
        <div className="footer-container">
          {/* <!-- main grid columns --> */}
          <div className="footer-grid">
            {/* <!-- brand column --> */}
            <div className="footer-brand">
              <div className="footer-logo">
                <i className="fas fa-film"></i>
                <span>MoviesExplore</span>
              </div>
              <p className="brand-description">
                The ultimate streaming destination for blockbusters, indie gems,
                and award-winning originals. Experience cinema everywhere.
              </p>
              <div className="app-buttons">
                <Link
                  to="#"
                  className="app-btn"
                  aria-label="Download on App Store"
                >
                  <i className="fab fa-apple"></i>
                  <div className="app-btn-text">
                    <small>Download on</small>
                    <span>App Store</span>
                  </div>
                </Link>
                <Link
                  to="#"
                  className="app-btn"
                  aria-label="Get it on Google Play"
                >
                  <i className="fab fa-google-play"></i>
                  <div className="app-btn-text">
                    <small>GET IT ON</small>
                    <span>Google Play</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* <!-- explore column --> */}
            <div className="footer-col">
              <h3>Explore</h3>
              <ul className="footer-links">
                <li>
                  <Link to="#">
                    <i className="fas fa-chevron-right"></i> What's New
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fas fa-chevron-right"></i> Trending Movies
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fas fa-chevron-right"></i> Top Series
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fas fa-chevron-right"></i> Coming Soon
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fas fa-chevron-right"></i> Awards & Events
                  </Link>
                </li>
              </ul>
            </div>

            {/* <!-- support column --> */}
            <div className="footer-col">
              <h3>Support</h3>
              <ul className="footer-links">
                <li>
                  <Link to="#">
                    <i className="fas fa-chevron-right"></i> Help Center
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fas fa-chevron-right"></i> Gift Cards
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fas fa-chevron-right"></i> Media Center
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fas fa-chevron-right"></i> Accessibility
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fas fa-chevron-right"></i> Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* <!-- legal & social mix --> */}
            <div className="footer-col">
              <h3>Connect</h3>
              <div className="social-row">
                <Link to="#" className="social-icon" aria-label="Instagram">
                  <i className="bx bxl-instagram-alt"></i>
                </Link>
                <Link to="#" className="social-icon" aria-label="Twitter">
                  <i className="bx bxl-facebook"></i>
                </Link>
                <Link to="#" className="social-icon" aria-label="Facebook">
                  <i className="bx bxl-twitter"></i>
                </Link>
                <Link to="#" className="social-icon" aria-label="YouTube">
                  <i className="bx bxl-youtube"></i>
                </Link>
                <Link to="#" className="social-icon" aria-label="TikTok">
                  <i className="bx bxl-tiktok"></i>
                </Link>
              </div>
              <div className="newsletter-box">
                <h3>Stay in Frame</h3>
                <p>Get first access to new releases & exclusive offers.</p>
                <div className="news-group">
                  <form className="news-group" onSubmit={subscribe}>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      aria-label="Email for newsletter"
                      required
                    />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- bottom bar with legal links and language toggle --> */}
          <div className="footer-bottom">
            <div className="legal-links">
              <Link to="#">Terms of Use</Link>
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Cookie Preferences</Link>
              <Link to="#">Corporate Information</Link>
            </div>
            <div className="language-selector" aria-label="Language selector">
              <i className="fas fa-globe"></i>
              <span>English</span>
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
          <div>
            © 2025 CineVerse Entertainment Inc. All rights reserved. All movies
            and trademarks property of their respective owners.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
