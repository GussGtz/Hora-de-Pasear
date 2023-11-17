// Mirador.js
import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const ParqueLasPalapas = () => {
  const [map, setMap] = useState(null);

  const mapContainerStyle = {
    height: '60vh',
    width: '70%',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    marginTop: '100px',
  };

  const locations = [
    { name: 'El Mirador', lat:21.060956, lng:-86.779397, title: 'El Mirador' },
  ];



  const onLoad = (map) => {
    setMap(map);
  };

  useEffect(() => {
    if (map) {
      // Porsi deseas manipular el mapa después de cargar :)
    }
  }, [map]);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDSKS3wcKlQEhSr_1WyYl8yAbPU59WAKuw"
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={17}
        center={locations[0]}
        onLoad={onLoad}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            label={{ text: location.name, color: 'white' }}
            title={location.title}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default ParqueLasPalapas;
