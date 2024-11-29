import { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap CSS is imported
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import About from './About'; 
import Contact from './Contact';
import logo from './assets/hs_logo.jpg';

function App() {
  // State to manage the navbar collapse
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(true);

  // Function to toggle the navbar state
  const toggleNavbar = () => setNavbarCollapsed(!isNavbarCollapsed);

  // Function to close the navbar
  const closeNavbar = () => setNavbarCollapsed(true);

  return (
    <Router>
      <div>
        {/* Navbar at the top */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNavbar} // Toggle collapse state
              aria-controls="navbarNav"
              aria-expanded={!isNavbarCollapsed}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${!isNavbarCollapsed ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/" onClick={closeNavbar}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About" onClick={closeNavbar}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact" onClick={closeNavbar}>
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="https://open.spotify.com/show/4YHaaQy9Fz830CZdT2fTRZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeNavbar}
                  >
                    Podcast
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="https://www.facebook.com/HammeredShark"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeNavbar}
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container text-center py-5" style={{ paddingTop: '80px' }}>
          <Routes>
            {/* Define routes */}
            <Route
              path="/"
              element={
                <>
                  {/* Home Page Content */}
                  <a
                    href="https://www.facebook.com/HammeredShark"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Hammered Shark on Facebook"
                  >
                    <img
                      src={logo} // Use your actual logo here
                      alt="Hammered Shark Logo"
                      className="logo mb-4"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </a>

                  <a
                    href="https://www.facebook.com/HammeredShark"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Facebook page"
                    className="btn btn-primary btn-lg"
                  >
                    Visit Our Social!
                  </a>
                </>
              }
            />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
