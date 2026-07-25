import { Link } from 'react-router-dom';
import img0 from '../images/0.png';
import { useEffect } from 'react';

function Navbar() {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    });
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={img0} alt="title" /> <span>Movies</span> Explore
          </Link>
          <button
            className="navbar-toggler"
            data-bs-target="#navbar"
            data-bs-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Feature" className="nav-link">
                  Feature
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
