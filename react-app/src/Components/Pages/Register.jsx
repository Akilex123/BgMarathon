import React from "react";
import QRCode from "react-qr-code";
import { useState } from "react";

function Register() {
  const [qrCode, setQrCode] = useState("");

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
              value={qrCode}
              onChange={(e) => setQrCode(e.target.value)}
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
          <QRCode value={qrCode} size={80}></QRCode>
        </form>
      </div>
    </>
  );
}

export default Register;
