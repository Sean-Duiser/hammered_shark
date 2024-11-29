import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap CSS is imported
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import About from './About'; 
import Contact from './Contact';
import logo from './assets/hs_logo.jpg';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar at the top */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="https://www.facebook.com/HammeredShark" target="_blank" rel="noopener noreferrer">
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
            <Route path="/" element={
              <>
                {/* Home Page Content */}
                <a 
                  href="https://www.facebook.com/HammeredShark" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Visit Hammered Shark on Facebook"
                >
                  <img 
                    src={logo}  // Use your actual logo here
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
            } />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
