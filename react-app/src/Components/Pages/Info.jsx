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
  const startPosition = [44.8055, 20.478]; // Bulevar kralja Aleksandra
  const finishPosition = [44.81, 20.467]; // Terazije
  const [searchParams] = useSearchParams();
  const ime = searchParams.get("ime");
  return (
    <>
      <div className="flex h-[calc(100vh-80px)] w-screen">
        <div className="flex-1">
          <h2 className="text-center text-3xl font-extrabold mt-20">
            Thank you for participating {ime}!
          </h2>
          <div className="text-center mt-10">
            <h3 className="text-center font-bold text-2xl mb-3">Your info:</h3>
            <p>
              <b>Number:</b> random br genersisi
            </p>
            <p>
              <b>Start of the race:</b> 08:00
            </p>
            <p>
              <b>Time to finish:</b> 03:00h
            </p>
          </div>
          <p className="text-center mt-10 font-medium">
            You can checkout starting point and gear pickup place on the map!
          </p>
          <p className="text-center font-medium">Good luck!</p>
        </div>
        <MapContainer center={startPosition} zoom={14} className="flex-1">
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
    </>
  );
}

export default Info;
