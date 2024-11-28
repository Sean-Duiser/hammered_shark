import hs_logo from './img/hs_logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Background GIF */}
      <div className="background-video-container">
        <div className="background-video"></div>
      </div>

      <header className="App-header">
        {/* Hyperlinked logo */}
        <a href="https://www.facebook.com/HammeredShark" target="_blank" rel="noopener noreferrer">
          <img src={hs_logo} className="App-logo" alt="logo" />
        </a>
        <a
          className="App-link"
          href="https://www.facebook.com/HammeredShark"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow us on Social!
        </a>
        <a><h2>More Coming Soon...</h2></a>
      </header>
    </div>
  );
}

export default App;
