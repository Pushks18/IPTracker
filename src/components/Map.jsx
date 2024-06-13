import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map({ coordinates }) {
  let state = {
    keyMAP: Math.random(),
  };
  return (
    <div className=" items-center justify-center">
      <MapContainer
        key={state.keyMAP}
        center={[coordinates.lat, coordinates.lng]}
        zoom={13}
        className="min-h-[700px] min-w-[100px]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[coordinates.lat, coordinates.lng]} />
      </MapContainer>
    </div>
  );
}
export default Map;
