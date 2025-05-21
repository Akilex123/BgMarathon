import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./Components/Pages/Home";
import Events from "./Components/Pages/Events";
import Contact from "./Components/Pages/Contact";
import Ten from "./Components/Pages/Ten";
import Forthy from "./Components/Pages/Forthy";
import Womans from "./Components/Pages/Womans";
import Twenty from "./Components/Pages/Twenty";
import Register from "./Components/Pages/Register";
import Info from "./Components/Pages/Info";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/events" element={<Events></Events>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/ten" element={<Ten></Ten>}></Route>
          <Route path="/forthy" element={<Forthy></Forthy>}></Route>
          <Route path="/twenty" element={<Twenty></Twenty>}></Route>
          <Route path="/womans" element={<Womans></Womans>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/info" element={<Info></Info>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
