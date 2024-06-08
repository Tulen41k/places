import React, { useState } from 'react';
import './App.css';
import { places } from './data';

const App: React.FC = () => {

  const [city, setCity] = useState<string | null>(null);

  const generateCity = () => {
    const randomCity = places[Math.floor(Math.random() * places.length)];
    setCity(randomCity);
  };

  return (
    <div className="App">
      <header className="App-header">
          Places
      </header>
      <button onClick={generateCity}>Сгенерировать город</button>
      {city && <p>Город: {city}</p>}
    </div>
  );
}

export default App;
