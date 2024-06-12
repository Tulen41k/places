// src/components/ShortTrips.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Splaces, Place } from '../data';

const ShortTrips: React.FC = () => {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const navigate = useNavigate();

  const generateCity = () => {
    if (Splaces.length === 0) return;
    const randomPlace = Splaces[Math.floor(Math.random() * Splaces.length)];
    setSelectedPlace(randomPlace);
  };

  return (
    <div>
    <header className="App-header">
      Близкие поездки
    </header>
    <div className="main-content">
      <button onClick={generateCity}>Сгенерировать город</button>
      {selectedPlace && (
        <div>
          <h2 className="city-name">{selectedPlace.city}</h2>
          <p className="city-info">{selectedPlace.distanceAndTime}</p>
          <h3 className="attractions-title">Достопримечательности</h3>
          <div className="attractions-container">
            {selectedPlace.attractions.map((attraction, index) => (
              <div className="attraction-card" key={index}>
                <h4>{attraction.name}</h4>
                <p>{attraction.description}</p>
                <img src={attraction.imageUrl} alt={attraction.name} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    <button className="back-button" onClick={() => navigate('/')}>Назад</button>
  </div>
  );
}

export default ShortTrips;
