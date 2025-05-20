import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import L from "leaflet";
import Countdown from "react-countdown";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const route = [
  [44.812, 20.477], // Bulevar kralja Aleksandra
  [44.807, 20.467], // Slavija
  [44.804, 20.46], // Nemanjina
  [44.807, 20.453], // Balkanska
  [44.81, 20.446], // Brankova
  [44.813, 20.432], // Brankov most
  [44.818, 20.428], // Bulevar Nikole Tesle (okret)
  [44.822, 20.437], // Ušće
  [44.819, 20.442], // Bulevar Mihajla Pupina
  [44.813, 20.433], // Brankov most nazad
  [44.81, 20.447], // Kraljice Natalije
  [44.808, 20.46], // Kneza Miloša
  [44.81, 20.468], // Terazije
];

function Forthy() {
  const eventDate = new Date("2025-06-04T09:00:00");

  return (
    <>
      <div className="mb-10">
        <MapContainer
          center={[44.811, 20.465]}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Polyline positions={route} color="red"></Polyline>
          <Marker position={[44.7866, 20.4489]}></Marker>
        </MapContainer>
      </div>
      <div className="text-center text-black text-9xl font-bold mb-20 mt-7">
        <Countdown date={eventDate}></Countdown>
      </div>
      <div>
        <div className="flex-col justify-center text-center mb-10">
          <h1>10k race</h1>
          <h3>
            Route:
            <p>
              Bulevar kralja Aleksandra – Beogradska – Slavija – Nemanjina –
              Balkanska – Gavrila Principa – Brankova – Brankov most – Bulevar
              Nikole Tesle (okret) – Ušće – Bulevar Mihajla Pupina – Brankov
              most – Brankova – Kraljice Natalije – Kneza Miloša – Kralja Milana
              – Terazije.
            </p>
          </h3>
          Time to finish:
          <p>3h</p>
          <button className="border px-8 py-2 rounded-3xl">Register</button>
        </div>
      </div>
    </>
  );
}

export default Forthy;
