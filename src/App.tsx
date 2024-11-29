import './App.css';
import logo from './assets/hs_logo.jpg';

function App() {
  return (
    <div className="container">
      <a href="https://www.facebook.com/HammeredShark" target="_blank" rel="noopener noreferrer">
        <img src={logo} className="logo" alt="Hammered Shark Logo" />
      </a>
      <a href="https://www.facebook.com/HammeredShark" target="_blank" rel="noopener noreferrer">
        Visit Our Social
      </a>
    </div>
  );
}

export default App;
