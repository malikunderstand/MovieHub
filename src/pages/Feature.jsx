function Feature() {
  return (
    <>
      {/* ============================================
   FEATURES SECTION
   ============================================ */}
      <div className="container-fluid features-section">
        <div className="container py-5">
          {/* Section Header */}
          <div className="text-center mb-5">
            <span className="features-badge">Why Choose Us</span>
            <h2 className="features-title">
              Amazing <span>Features</span> for Movie Lovers
            </h2>
            <div className="features-line-center"></div>
            <p className="features-subtitle">
              Discover why millions of movie enthusiasts choose us for their
              daily entertainment
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="row g-4">
            {/* Feature 1 - HD Streaming */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">
                    <i className="bx bx-tv"></i>
                  </div>
                  <div className="feature-icon-bg"></div>
                </div>
                <h5 className="feature-card-title">Ultra HD Streaming</h5>
                <p className="feature-card-desc">
                  Experience movies in crystal clear 4K HDR quality with
                  immersive Dolby Atmos sound.
                </p>
                <div className="feature-card-footer">
                  <span className="feature-tag">4K</span>
                  <span className="feature-tag">HDR</span>
                  <span className="feature-tag">Dolby</span>
                </div>
                <div className="feature-number">01</div>
              </div>
            </div>

            {/* Feature 2 - Personalized Recommendations */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">
                    <i className="bx bx-brain"></i>
                  </div>
                  <div className="feature-icon-bg"></div>
                </div>
                <h5 className="feature-card-title">AI Recommendations</h5>
                <p className="feature-card-desc">
                  Smart AI algorithms suggest movies based on your viewing
                  history and preferences.
                </p>
                <div className="feature-card-footer">
                  <span className="feature-tag">AI</span>
                  <span className="feature-tag">Smart</span>
                  <span className="feature-tag">Personalized</span>
                </div>
                <div className="feature-number">02</div>
              </div>
            </div>

            {/* Feature 3 - Watch Anywhere */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">
                    <i className="bx bx-devices"></i>
                  </div>
                  <div className="feature-icon-bg"></div>
                </div>
                <h5 className="feature-card-title">Watch Anywhere</h5>
                <p className="feature-card-desc">
                  Seamlessly switch between devices - phone, tablet, laptop, or
                  smart TV.
                </p>
                <div className="feature-card-footer">
                  <span className="feature-tag">Mobile</span>
                  <span className="feature-tag">TV</span>
                  <span className="feature-tag">Tablet</span>
                </div>
                <div className="feature-number">03</div>
              </div>
            </div>

            {/* Feature 4 - Offline Download */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">
                    <i className="bx bx-download"></i>
                  </div>
                  <div className="feature-icon-bg"></div>
                </div>
                <h5 className="feature-card-title">Offline Downloads</h5>
                <p className="feature-card-desc">
                  Download your favorite movies and watch them offline, anytime,
                  anywhere.
                </p>
                <div className="feature-card-footer">
                  <span className="feature-tag">Offline</span>
                  <span className="feature-tag">Download</span>
                  <span className="feature-tag">Anytime</span>
                </div>
                <div className="feature-number">04</div>
              </div>
            </div>

            {/* Feature 5 - Multiple Languages */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">
                    <i className="bx bx-globe"></i>
                  </div>
                  <div className="feature-icon-bg"></div>
                </div>
                <h5 className="feature-card-title">Multi-Language Support</h5>
                <p className="feature-card-desc">
                  Enjoy movies with subtitles and dubbing in over 30 languages
                  worldwide.
                </p>
                <div className="feature-card-footer">
                  <span className="feature-tag">30+ Languages</span>
                  <span className="feature-tag">Subtitles</span>
                  <span className="feature-tag">Dubbing</span>
                </div>
                <div className="feature-number">05</div>
              </div>
            </div>

            {/* Feature 6 - Family Sharing */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">
                    <i className="bx bx-group"></i>
                  </div>
                  <div className="feature-icon-bg"></div>
                </div>
                <h5 className="feature-card-title">Family Sharing</h5>
                <p className="feature-card-desc">
                  Create up to 5 profiles for your family members with
                  personalized content.
                </p>
                <div className="feature-card-footer">
                  <span className="feature-tag">Family</span>
                  <span className="feature-tag">5 Profiles</span>
                  <span className="feature-tag">Safe</span>
                </div>
                <div className="feature-number">06</div>
              </div>
            </div>
          </div>

          {/* Feature Stats Row */}
          <div className="row g-4 mt-4">
            <div className="col-12 col-md-3 col-sm-6">
              <div className="feature-stat">
                <div className="feature-stat-number">15K+</div>
                <div className="feature-stat-label">Movies Available</div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-sm-6">
              <div className="feature-stat">
                <div className="feature-stat-number">250K+</div>
                <div className="feature-stat-label">Active Users</div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-sm-6">
              <div className="feature-stat">
                <div className="feature-stat-number">4.8★</div>
                <div className="feature-stat-label">Average Rating</div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-sm-6">
              <div className="feature-stat">
                <div className="feature-stat-number">195</div>
                <div className="feature-stat-label">Countries</div>
              </div>
            </div>
          </div>

          {/* Feature CTA */}
          <div className="text-center mt-5">
            <button className="btn btn-feature-cta">
              <i className="bx bx-rocket"></i> Start Exploring Now
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
