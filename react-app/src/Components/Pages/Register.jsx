import React from "react";

function Register() {
  return (
    <>
      <div className="w-screen h-lvh pt-30">
        <form
          action=""
          className="rounded-2xl shadow-2xl/50 w-90 h-110 mx-auto pt-10"
        >
          <h1 className="w-full text-center text-2xl mb-10">Run with Us!</h1>
          <div className="flex justify-center mb-3">
            <input
              type="text"
              className="w-60 h-10 border pl-3 rounded-2xl"
              placeholder="Name & Lastname"
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
        </form>
      </div>
    </>
  );
}

export default Register;
