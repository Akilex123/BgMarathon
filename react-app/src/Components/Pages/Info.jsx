import React from "react";
import { useSearchParams } from "react-router-dom";
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

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function Info() {
  const [searchParams] = useSearchParams();
  const ime = searchParams.get("ime");
  const broj = Math.floor(100 + Math.random() * 900);

  const startPosition = [44.8055, 20.478];
  const finishPosition = [44.81, 20.467];

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-80px)] w-screen overflow-hidden">
      <div className="lg:flex-1 px-6 py-6 text-center">
        <h2 className="text-3xl font-extrabold mb-6">
          Thank you for participating {ime}!
        </h2>
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">Your info:</h3>
          <p>
            <b>Number:</b> {broj}
          </p>
          <p>
            <b>Start of the race:</b> 08:00
          </p>
          <p>
            <b>Time to finish:</b> 03:00h
          </p>
        </div>
        <p className="font-medium mb-1">
          You can check out the starting point and gear pickup place on the map!
        </p>
        <p className="font-medium">Good luck!</p>
      </div>
      <div className="lg:flex-1 h-[300px] lg:h-full">
        <MapContainer
          center={startPosition}
          zoom={14}
          className="w-full h-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={startPosition}>
            <Popup>Start - Vukov Spomenik</Popup>
          </Marker>
          <Marker position={finishPosition}>
            <Popup>Mesto za opermu - Glavna Posta</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Info;
