import React, { useState } from "react";
import QRCode from "react-qr-code";

function Register() {
  const [ime, setIme] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleGenerate = () => {
    if (ime.trim() === "") return;
    const base = window.location.origin + "/info";
    const url = `${base}?ime=${encodeURIComponent(ime)}`;
    setQrCode(url);
  };

  return (
    <div className="relative bg-[url('/Register.png')] bg-cover bg-center w-screen min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-8">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <form className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg w-full max-w-md p-6 space-y-4">
        <h1 className="text-center text-2xl font-bold">Run with Us!</h1>

        <input
          type="text"
          className="w-full h-10 pl-3 border rounded-2xl focus:ring-2 outline-none focus:ring-blue-500"
          placeholder="Name & Lastname"
          value={ime}
          onChange={(e) => setIme(e.target.value)}
        />
        <input
          type="email"
          className="w-full h-10 pl-3 border rounded-2xl focus:ring-2 outline-none focus:ring-blue-500"
          placeholder="Email"
        />
        <input
          type="password"
          className="w-full h-10 pl-3 border rounded-2xl focus:ring-2 outline-none focus:ring-blue-500"
          placeholder="Password"
        />
        <input
          type="number"
          className="w-full h-10 pl-3 border rounded-2xl focus:ring-2 outline-none focus:ring-blue-500"
          placeholder="Estimated time"
        />

        <div className="flex items-center justify-between mt-4">
          <button
            className="bg-blue-500 text-white px-5 py-2 rounded-3xl hover:bg-blue-600"
            type="button"
            onClick={handleGenerate}
          >
            Generate QR
          </button>
          {qrCode && (
            <div>
              <QRCode value={qrCode} size={80} className="m-5" />
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Register;
