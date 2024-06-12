// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ShortTrips from './components/ShortTrips';
import LongTrips from './components/LongTrips';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/short-trips" element={<ShortTrips />} />
        <Route path="/long-trips" element={<LongTrips />} />
      </Routes>
    </div>
  </Router>
  );
}

const Home: React.FC = () => {
  return (
    <div>
      <header className="App-header">
        Выбор места
      </header>
      <nav>
        <Link to="/short-trips">
          <button>Близкие поездки</button>
        </Link>
        <Link to="/long-trips">
          <button>Долгие поездки</button>
        </Link>
      </nav>
    </div>
  );
}

export default App;

