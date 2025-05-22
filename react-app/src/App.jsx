import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./Components/Pages/Home";
import Register from "./Components/Pages/Register";
import Info from "./Components/Pages/Info";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>

          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/info" element={<Info></Info>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
