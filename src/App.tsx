import { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SubstackPostEmbed from './components/SubstackPostEmbed';
import DynamicSubstackCard from './components/DynamicSubstackCard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Podcast from './Podcast';

function App() {
  // State to manage navbar toggle
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(true);

  const toggleNavbar = () => setNavbarCollapsed(!isNavbarCollapsed);
  const closeNavbar = () => setNavbarCollapsed(true);

  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNavbar}
              aria-controls="navbarNav"
              aria-expanded={!isNavbarCollapsed}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${!isNavbarCollapsed ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={closeNavbar}>
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
                  <Link className="nav-link" to="/Podcast" onClick={closeNavbar}>
                    Podcast
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.facebook.com/HammeredShark"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeNavbar}
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container text-center py-5" style={{ paddingTop: '80px' }}>
          <Routes>
            <Route
              path="/"
              element={
                <div className="container py-5" style={{ paddingTop: '80px' }}>
                  <div className="row justify-content-center">
                    <div className="col-12 col-lg-10 text-center">

                      {/* Hammered Shark Box */}
                      <div className="shark-breach signup-header-overlay text-light w-100 p-4 rounded mb-5" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h3
                          className="mb-4"
                          style={{
                            color: '#00ffff',
                            fontFamily: 'Bebas Neue, Impact, sans-serif',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            fontSize: '2rem'
                          }}
                        >
                          Hammered Shark Productions
                        </h3>

                        {/* Substack Embed */}
                        <SubstackPostEmbed />

                        {/* Custom Post Preview */}
                        <DynamicSubstackCard />
                      </div>

                      {/* CTA */}
                      <div className="text-light">
                        <a
                          href="https://www.facebook.com/HammeredShark"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Visit our Facebook page"
                          className="btn btn-primary btn-lg"
                        >
                          Visit Our Social!
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              }
            />

            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Podcast" element={<Podcast />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
