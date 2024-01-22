import './Localisation.css'; // Assurez-vous d'ajuster le chemin d'accès correct

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Localisation = () => {
  const position = [43.617686, 3.897448]; // Remplacez par les coordonnées du restaurant

  return (
    <div className="localisation">
      <h2>Localisation du Restaurant Riccardo's Pizzeria</h2>
      <div className="map">
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
      <h3>Riccardo's Pizzeria</h3> 
      </Popup>
    </Marker>
  </MapContainer>
      </div>
    </div>
  );
};

export default Localisation;
