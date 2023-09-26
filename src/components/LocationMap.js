import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import IconLocation from '../assets/images/icon-location.png';
import L from 'leaflet';

const DefaultIcon = L.icon({
    iconUrl: IconLocation,
});

export function LocationMap() {
  return (
      <MapContainer center={[46.135579, 23.644418]} zoom={13} scrollWheelZoom={false} style={{ height:500 }}>
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[46.135579, 23.644418]} icon={DefaultIcon} >
          <Popup>
          Sântimbru, Șos. Națională, <br /> nr.15, județul Alba
          </Popup>
        </Marker>
      </MapContainer>
  );
}
