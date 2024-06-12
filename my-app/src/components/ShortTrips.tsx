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
      <button onClick={generateCity}>Сгенерировать город</button>
      {selectedPlace && (
        <div>
          <h2>{selectedPlace.city}</h2>
          <p>{selectedPlace.distanceAndTime}</p>
          <h3>Достопримечательности:</h3>
          <ul>
            {selectedPlace.attractions.map((attraction, index) => (
              <li key={index}>
                <h4>{attraction.name}</h4>
                <p>{attraction.description}</p>
                <img src={attraction.imageUrl} alt={attraction.name} width="200" />
              </li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={() => navigate('/')}>Назад</button>
    </div>
  );
}

export default ShortTrips;
