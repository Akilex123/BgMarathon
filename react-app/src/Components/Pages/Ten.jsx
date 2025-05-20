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

function Ten() {
  const eventDate = new Date("2025-06-04T09:00:00");
  const startPosition = [44.8055, 20.478]; // Bulevar kralja Aleksandra
  const finishPosition = [44.81, 20.467]; // Terazije

  return (
    <>
      <div className="mb-10">
        <MapContainer
          center={startPosition}
          zoom={14}
          style={{ height: "80vh", width: "100%" }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={startPosition}>
            <Popup>Start - Bulevar kralja Aleksandra</Popup>
          </Marker>
          <Marker position={finishPosition}>
            <Popup>Cilj - Terazije</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="text-center text-black text-9xl font-bold mb-20 mt-7">
        <Countdown date={eventDate}></Countdown>
      </div>
      <div className="w-screen text-center mb-20">
        <h3 className="text-4xl font-bold mb-5 ">Information</h3>
        <p className="font-medium text-lg">Date: Sunday, July 6, 2025</p>
        <p className="font-medium text-lg">
          Organizer: Belgrade Marathon d.o.o
        </p>
        <p className="font-medium text-lg">Patron: City of Belgrade</p>
        <p className="font-bold text-lg">Price: 35 EUR</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold w-screen text-center mb-10">
          Participant package
        </h3>
        <div className="grid grid-cols-2 gap-10 p-4 ml-30 mr-30">
          <div className="bg-white shadow-2xl/50 rounded-xl py-15 text-center">
            <h3 className="text-3xl mb-2">🏅</h3>
            <p className="font-medium">Unique medal at the finish line</p>
          </div>
          <div className="bg-white shadow-2xl/50 rounded-xl py-15 text-center">
            <h3 className="text-3xl mb-2">🥤</h3>
            <p className="font-medium">
              Refreshments on the Course and at the Finish Line
            </p>
          </div>
          <div className="bg-white shadow-2xl/50 rounded-xl p-15 text-center">
            <h3 className="text-3xl mb-2">🏥</h3>
            <p className="font-medium">
              Medical assistance on the course and at the finish line
            </p>
          </div>
          <div className="bg-white shadow-2xl/50 rounded-xl p-15 text-center">
            <h3 className="text-3xl mb-2">🚪</h3>
            <p className="font-medium">Bag storage during the race</p>
          </div>
        </div>
      </div>
      <div className="w-screen text-center mb-15 mt-20">
        <h3 className="text-4xl font-bold mb-5">10k</h3>
        <p className="mr-50 ml-50 text-left">
          All citizens have the right to participate, while children aged 12 to
          18 must have written consent from a parent, which the parent will sign
          on-site during the pickup of the participant packet. The time limit
          for the race is 90 minutes. The race starts at 11:00 AM at the
          intersection of Bulevar Kralja Aleksandra and Resavska streets,
          following the route through the following streets: Bulevar Kralja
          Aleksandra – Beogradska – Slavija – Nemanjina – Balkanska – Gavrila
          Principa – Brankova – Brankov Bridge – Bulevar Nikola Tesla –
          turnaround – Bulevar Nikola Tesla – Ušće – Bulevar Mihajla Pupina –
          Brankov Bridge – Brankova – Kraljice Natalije – Kneza Miloša – Kralja
          Milana – Terazije – The finish line is in front of the “Moscow” hotel.
        </p>
      </div>
    </>
  );
}

export default Ten;
