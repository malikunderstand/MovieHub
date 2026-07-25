import img3 from '../images/h.jfif';
import img10 from '../images/10.jfif';
import img11 from '../images/11.jfif';
import img12 from '../images/12.jfif';
import img13 from '../images/13.jfif';
import img14 from '../images/14.jfif';

function about() {
  return (
    <>
      {/* ===== HERO/JUMBOTRON SECTION ===== */}
      <div className="container-fluid p-0">
        <div className="row py-5">
          <div className="col-12">
            <div className="jumotron bg-dark text-light py-5">
              <div className="jumbotron-body text-center py-5">
                <h2 className="about-hero-title">
                  About <span>Us</span>
                </h2>
                <div className="about-line"></div>
                <p className="w-75 d-block m-auto about-hero-text">
                  A modern movies website to explore trending films, view
                  details, watch trailers, and discover ratings, cast
                  information, and personalized recommendations in a clean,
                  user-friendly interface.
                </p>
                <button className="btn btn-about-hero mt-4">
                  <i className="bx bx-play-circle"></i> Discover More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== OUR STORY SECTION ===== */}
      <div className="container-fluid p-0 about-story-section">
        <div className="row py-5 align-items-center">
          <div className="col-12 col-lg-6 col-md-6 col-sm-12 p-5">
            <span className="about-badge">Our Story</span>
            <h2 className="about-story-title mt-3">
              The Journey of <span>MoviesExplore</span>
            </h2>
            <div className="about-line-left"></div>
            <p className="about-story-text">
              A modern movies website to explore trending films, view details,
              watch trailers, and discover ratings, cast information, and
              personalized recommendations in a clean, user-friendly interface.
            </p>
            <div className="about-features-list">
              <div className="about-feature-item">
                <i className="bx bx-check-circle"></i>
                <span>Curated movie collections</span>
              </div>
              <div className="about-feature-item">
                <i className="bx bx-check-circle"></i>
                <span>Real-time ratings & reviews</span>
              </div>
              <div className="about-feature-item">
                <i className="bx bx-check-circle"></i>
                <span>Personalized recommendations</span>
              </div>
            </div>
            <button className="btn btn-about-primary btn-lg mt-3">
              Learn More <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
          <div className="col-12 col-lg-6 col-md-6 col-sm-12 p-5">
            <div className="about-image-wrapper">
              <img
                src={img3}
                alt="About Us"
                className="img-fluid about-story-image"
              />
              <div className="about-image-overlay">
                <i className="bx bx-play-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== NEW SECTION 1: MISSION & VALUES ===== */}
      <div className="container-fluid about-mission-section">
        <div className="container py-5">
          <div className="text-center mb-5">
            <span className="about-badge">Core Values</span>
            <h2 className="about-section-title">
              Our <span>Mission & Values</span>
            </h2>
            <div className="about-line-center"></div>
            <p className="about-section-subtitle">
              What drives us to deliver the best movie experience
            </p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="value-card">
                <div className="value-icon">
                  <i className="bx bx-heart"></i>
                </div>
                <h5>Passion for Cinema</h5>
                <p>
                  We breathe movies and bring that passion to every user
                  interaction.
                </p>
                <div className="value-number">01</div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="value-card">
                <div className="value-icon">
                  <i className="bx bx-star"></i>
                </div>
                <h5>Quality Content</h5>
                <p>
                  Curating only the best films with accurate ratings and
                  reviews.
                </p>
                <div className="value-number">02</div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="value-card">
                <div className="value-icon">
                  <i className="bx bx-user-check"></i>
                </div>
                <h5>User First</h5>
                <p>
                  Building an intuitive interface that movie lovers truly
                  deserve.
                </p>
                <div className="value-number">03</div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="value-card">
                <div className="value-icon">
                  <i className="bx bx-rocket"></i>
                </div>
                <h5>Innovation</h5>
                <p>
                  Constantly evolving with new features and better
                  recommendations.
                </p>
                <div className="value-number">04</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== NEW SECTION 2: STATS COUNTER ===== */}
      <div className="container-fluid about-stats-section">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="bx bx-movie"></i>
                </div>
                <div className="stat-number" data-target="15000">
                  0
                </div>
                <p>Movies Available</p>
                <div className="stat-bar"></div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="bx bx-user"></i>
                </div>
                <div className="stat-number" data-target="250000">
                  0
                </div>
                <p>Active Users</p>
                <div className="stat-bar"></div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="bx bx-star"></i>
                </div>
                <div className="stat-number" data-target="4.8">
                  0
                </div>
                <p>Average Rating</p>
                <div className="stat-bar"></div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="bx bx-globe"></i>
                </div>
                <div className="stat-number" data-target="195">
                  0
                </div>
                <p>Countries</p>
                <div className="stat-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== NEW SECTION 3: OUR TEAM ===== */}
      <div className="container-fluid about-team-section">
        <div className="container py-5">
          <div className="text-center mb-5">
            <span className="about-badge">Team</span>
            <h2 className="about-section-title">
              Meet Our <span>Creators</span>
            </h2>
            <div className="about-line-center"></div>
            <p className="about-section-subtitle">
              The passionate minds behind MoviesExplore
            </p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="team-card">
                <div className="team-image">
                  <img src={img10} alt="Team Member" />
                  <div className="team-social">
                    <a href="#">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="bx bxl-github"></i>
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h5>John Anderson</h5>
                  <span>CEO & Founder</span>
                  <p>Visionary leader with 15+ years in entertainment tech.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="team-card">
                <div className="team-image">
                  <img src={img11} alt="Team Member" />
                  <div className="team-social">
                    <a href="#">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="bx bxl-github"></i>
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h5>Sarah Chen</h5>
                  <span>CTO</span>
                  <p>Tech architect building scalable movie platforms.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="team-card">
                <div className="team-image">
                  <img src={img12} alt="Team Member" />
                  <div className="team-social">
                    <a href="#">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="bx bxl-dribbble"></i>
                    </a>
                    <a href="#">
                      <i className="bx bxl-behance"></i>
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h5>Mike Rodriguez</h5>
                  <span>Lead Designer</span>
                  <p>Creating beautiful, intuitive user experiences.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="team-card">
                <div className="team-image">
                  <img src={img13} alt="Team Member" />
                  <div className="team-social">
                    <a href="#">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h5>Emily Watson</h5>
                  <span>Marketing Director</span>
                  <p>Connecting movies with audiences worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== TESTIMONIAL SECTION (Bonus) ===== */}
      <div className="container-fluid about-testimonial-section">
        <div className="container py-5">
          <div className="testimonial-card">
            <i className="bx bxs-quote-left testimonial-quote"></i>
            <p className="testimonial-text">
              MoviesExplore has completely changed how I discover new films. The
              recommendations are spot on and the interface is gorgeous!
            </p>
            <div className="testimonial-author">
              <img src={img14} alt="User" />
              <div>
                <h6>David Park</h6>
                <span>Movie Enthusiast</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
