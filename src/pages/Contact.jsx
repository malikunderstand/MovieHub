import { useEffect } from 'react';

function contact() {
  const subscribe = () => {
    alert('Thanks For Subscribing!');
  };

  const contactform = () => {
    alert('Your Message Sent SuccessFully!');
  };

  return (
    <>
      {/* ===== HERO/JUMBOTRON SECTION ===== */}
      <div className="container-fluid p-0">
        <div className="row py-5">
          <div className="col-12">
            <div className="jumotron bg-dark text-light py-5">
              <div className="jumbotron-body text-center py-5">
                <h2 className="contact-hero-title">
                  Contact <span>Us</span>
                </h2>
                <div className="contact-line"></div>
                <p className="w-75 d-block m-auto contact-hero-text">
                  Have questions, feedback, or partnership ideas? We'd love to
                  hear from you. Reach out and let's make movie magic together.
                </p>
                <div className="contact-hero-badges">
                  <span className="hero-badge">
                    <i className="bx bx-phone"></i> +1 (555) 123-4567
                  </span>
                  <span className="hero-badge">
                    <i className="bx bx-envelope"></i> support@moviesexplore.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SECTION 1: CONTACT INFO CARDS ===== */}
      <div className="container-fluid contact-info-section">
        <div className="container py-4">
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <i className="bx bx-phone"></i>
                </div>
                <h5>Phone</h5>
                <p>+1 (555) 123-4567</p>
                <span className="contact-info-label">Available 24/7</span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <i className="bx bx-envelope"></i>
                </div>
                <h5>Email</h5>
                <p>support@moviesexplore.com</p>
                <span className="contact-info-label">Response within 24h</span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <i className="bx bx-map"></i>
                </div>
                <h5>Location</h5>
                <p>123 Movie Street, LA</p>
                <span className="contact-info-label">
                  Los Angeles, CA 90001
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <i className="bx bx-time"></i>
                </div>
                <h5>Working Hours</h5>
                <p>Mon - Fri: 9AM - 9PM</p>
                <span className="contact-info-label">
                  Sat - Sun: 10AM - 6PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SECTION 2: CONTACT FORM + MAP ===== */}
      <div className="container-fluid contact-form-section">
        <div className="container py-5">
          <div className="row g-5 align-items-start">
            {/* Left Column - Contact Form */}
            <div className="col-12 col-lg-6">
              <div className="contact-form-wrapper">
                <span className="contact-badge">Get in Touch</span>
                <h2 className="contact-form-title">
                  Send Us a <span>Message</span>
                </h2>
                <div className="contact-line-left"></div>
                <p className="contact-form-subtitle">
                  Fill out the form below and our team will get back to you as
                  soon as possible.
                </p>

                <form
                  id="contact-form"
                  className="contact-form"
                  onSubmit={contactform}
                >
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>
                          <i className="bx bx-user"></i> Full Name
                        </label>
                        <input
                          type="text"
                          name="from_name"
                          id="from_name"
                          className="form-control"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>
                          <i className="bx bx-envelope"></i> Email Address
                        </label>
                        <input
                          type="email"
                          name="user_email"
                          id="user_email"
                          className="form-control"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>
                      <i className="bx bx-phone"></i> Phone Number
                    </label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      className="form-control"
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      <i className="bx bx-category"></i> Subject
                    </label>
                    <select className="form-control" required>
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>
                      <i className="bx bx-message"></i> Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      placeholder="Tell us how we can help..."
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-contact-submit">
                    <i className="bx bx-send"></i> Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column - Map & Contact Info */}
            <div className="col-12 col-lg-6">
              <div className="contact-map-wrapper">
                <div className="contact-map-card">
                  <div className="map-container">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.929748271194!2d-118.32053932474286!3d34.05223527311619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b8c9b9b9b9b9%3A0x9b9b9b9b9b9b9b9b!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000"
                      width="100%"
                      height="280"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      title="Office Location Map"
                    ></iframe>
                    <div className="map-overlay">
                      <i className="bx bx-map-pin"></i>
                      <span>Our Location</span>
                    </div>
                  </div>

                  <div className="map-details">
                    <h6>
                      <i className="bx bx-current-location"></i> Find Us Here
                    </h6>
                    <p>
                      123 Movie Street, Suite 100
                      <br />
                      Los Angeles, CA 90001
                    </p>
                    <div className="map-directions">
                      <a href="#" className="btn btn-directions">
                        <i className="bx bx-directions"></i> Get Directions
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Status */}
                <div className="contact-status-card">
                  <div className="status-item">
                    <div className="status-dot online"></div>
                    <div>
                      <h6>Online Support</h6>
                      <span>We're here to help</span>
                    </div>
                  </div>
                  <div className="status-item">
                    <div className="status-dot"></div>
                    <div>
                      <h6>Response Time</h6>
                      <span>~ 2-4 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SECTION 3: FAQ SECTION ===== */}
      <div className="container-fluid contact-faq-section">
        <div className="container py-5">
          <div className="text-center mb-5">
            <span className="contact-badge">FAQ</span>
            <h2 className="contact-section-title">
              Frequently Asked <span>Questions</span>
            </h2>
            <div className="contact-line-center"></div>
            <p className="contact-section-subtitle">
              Quick answers to common questions
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="faq-accordion">
                <div className="faq-item active">
                  <div className="faq-question" onClick={() => toggleFaq(0)}>
                    <h6>How do I create an account?</h6>
                    <i className="bx bx-chevron-down"></i>
                  </div>
                  <div className="faq-answer">
                    <p>
                      Creating an account is easy! Simply click on the "Sign Up"
                      button at the top right corner of our homepage. Fill in
                      your name, email address, and create a password. You'll
                      receive a confirmation email to verify your account.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div className="faq-question" onClick={() => toggleFaq(1)}>
                    <h6>Are the movies free to watch?</h6>
                    <i className="bx bx-chevron-down"></i>
                  </div>
                  <div className="faq-answer">
                    <p>
                      We offer both free and premium content. Free users can
                      watch selected movies with ads, while premium subscribers
                      get ad-free access to our entire library, exclusive
                      content, and early releases.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div className="faq-question" onClick={() => toggleFaq(2)}>
                    <h6>How can I cancel my subscription?</h6>
                    <i className="bx bx-chevron-down"></i>
                  </div>
                  <div className="faq-answer">
                    <p>
                      You can cancel your subscription anytime from your account
                      settings. Go to "My Account" → "Subscription" → "Cancel
                      Subscription". Your subscription will remain active until
                      the current billing period ends.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div className="faq-question" onClick={() => toggleFaq(3)}>
                    <h6>What devices are supported?</h6>
                    <i className="bx bx-chevron-down"></i>
                  </div>
                  <div className="faq-answer">
                    <p>
                      Our platform supports all major devices including
                      smartphones (iOS & Android), tablets, desktops, laptops,
                      smart TVs, and streaming devices like Roku, Apple TV, and
                      Chromecast.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div className="faq-question" onClick={() => toggleFaq(4)}>
                    <h6>How do I report a problem with a movie?</h6>
                    <i className="bx bx-chevron-down"></i>
                  </div>
                  <div className="faq-answer">
                    <p>
                      If you encounter any issues with a movie (playback errors,
                      subtitle issues, etc.), please contact our support team
                      through the contact form above or email us directly at
                      support@moviesexplore.com with details of the problem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SECTION 4: SOCIAL CONNECT ===== */}
      <div className="container-fluid contact-social-section">
        <div className="container py-5">
          <div className="social-connect-wrapper">
            <div className="social-connect-content">
              <span className="contact-badge">Connect</span>
              <h2 className="contact-section-title">
                Follow Us on <span>Social Media</span>
              </h2>
              <div className="contact-line-center"></div>
              <p className="contact-section-subtitle">
                Stay updated with the latest movies and exclusive content
              </p>

              <div className="social-connect-grid">
                <a href="#" className="social-connect-card facebook">
                  <div className="social-connect-icon">
                    <i className="bx bxl-facebook"></i>
                  </div>
                  <div className="social-connect-info">
                    <h6>Facebook</h6>
                    <span>Join our community</span>
                  </div>
                  <div className="social-connect-follow">
                    <span>Follow</span>
                    <i className="bx bx-right-arrow-alt"></i>
                  </div>
                </a>

                <a href="#" className="social-connect-card instagram">
                  <div className="social-connect-icon">
                    <i className="bx bxl-instagram"></i>
                  </div>
                  <div className="social-connect-info">
                    <h6>Instagram</h6>
                    <span>See our stories</span>
                  </div>
                  <div className="social-connect-follow">
                    <span>Follow</span>
                    <i className="bx bx-right-arrow-alt"></i>
                  </div>
                </a>

                <a href="#" className="social-connect-card twitter">
                  <div className="social-connect-icon">
                    <i className="bx bxl-twitter"></i>
                  </div>
                  <div className="social-connect-info">
                    <h6>Twitter</h6>
                    <span>Get latest updates</span>
                  </div>
                  <div className="social-connect-follow">
                    <span>Follow</span>
                    <i className="bx bx-right-arrow-alt"></i>
                  </div>
                </a>

                <a href="#" className="social-connect-card youtube">
                  <div className="social-connect-icon">
                    <i className="bx bxl-youtube"></i>
                  </div>
                  <div className="social-connect-info">
                    <h6>YouTube</h6>
                    <span>Watch trailers & reviews</span>
                  </div>
                  <div className="social-connect-follow">
                    <span>Subscribe</span>
                    <i className="bx bx-right-arrow-alt"></i>
                  </div>
                </a>

                <a href="#" className="social-connect-card tiktok">
                  <div className="social-connect-icon">
                    <i className="bx bxl-tiktok"></i>
                  </div>
                  <div className="social-connect-info">
                    <h6>TikTok</h6>
                    <span>Short movie clips</span>
                  </div>
                  <div className="social-connect-follow">
                    <span>Follow</span>
                    <i className="bx bx-right-arrow-alt"></i>
                  </div>
                </a>

                <a href="#" className="social-connect-card linkedin">
                  <div className="social-connect-icon">
                    <i className="bx bxl-linkedin"></i>
                  </div>
                  <div className="social-connect-info">
                    <h6>LinkedIn</h6>
                    <span>Business inquiries</span>
                  </div>
                  <div className="social-connect-follow">
                    <span>Connect</span>
                    <i className="bx bx-right-arrow-alt"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BONUS: NEWSLETTER SUBSCRIPTION ===== */}
      <div className="container-fluid contact-newsletter-section">
        <div className="container py-5">
          <div className="newsletter-wrapper">
            <div className="newsletter-content">
              <i className="bx bx-envelope-open newsletter-icon"></i>
              <h3>
                Subscribe to Our <span>Newsletter</span>
              </h3>
              <p>
                Get the latest movie news, releases, and exclusive offers
                delivered to your inbox.
              </p>
              <div className="newsletter-form">
                <form onSubmit={subscribe} className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                  <button type="submit">
                    Subscribe <i className="bx bx-right-arrow-alt"></i>
                  </button>
                </form>
              </div>
              <span className="newsletter-note">
                We respect your privacy. Unsubscribe anytime.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default contact;
