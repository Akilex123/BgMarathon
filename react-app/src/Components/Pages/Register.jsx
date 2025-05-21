import React from "react";
import QRCode from "react-qr-code";
import { useState } from "react";

function Register() {
  const [ime, setIme] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleGenerate = () => {
    if (ime.trim === "") return;
    const base = window.location.origin + "/info";
    const url = `${base}?ime=${encodeURIComponent(ime)}`;
    setQrCode(url);
  };

  return (
    <>
      <div className="bg-[url('./Register.png')] relative  bg-center w-screen h-[calc(100vh-80px)] pt-20">
        <form
          action=""
          className="relative z-20  rounded-2xl shadow-2xl/50 w-90 h-110 mx-auto p-15"
        >
          <h1 className="w-full text-center text-2xl mb-10">Run with Us!</h1>
          <div className="flex justify-center mb-3">
            <input
              type="text"
              className="w-60 h-10  pl-3 rounded-2xl focus:ring-2 outline-none focus:ring-blue-500"
              placeholder="Name & Lastname"
              value={ime}
              onChange={(e) => setIme(e.target.value)}
            />
          </div>
          <div className="flex justify-center mb-3">
            <input
              type="email"
              className="w-60 h-10 border pl-3 rounded-2xl"
              placeholder="Email"
            />
          </div>
          <div className="flex justify-center mb-3">
            <input
              type="password"
              className="w-60 h-10 border pl-3 rounded-2xl"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-center mb-3">
            <input
              type="text"
              className="w-60 h-10 border pl-3 rounded-2xl"
              placeholder="Estimated time"
            />
          </div>
          <div className="flex gap-10 mt-5 ml-3 items-center">
            <button
              className="bg-blue-500 h-10 text-white rounded-3xl px-4 hover:bg-blue-600"
              onClick={handleGenerate}
              type="button"
            >
              Generate QR
            </button>
            {qrCode && (
              <div>
                <QRCode value={qrCode} size={60}></QRCode>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
