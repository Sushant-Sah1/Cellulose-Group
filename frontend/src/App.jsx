import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Facility from "../pages/Facility";
import Opportunity from "../pages/Opportunity";
import Teaching from "../pages/Teaching";
import Recognition from "../pages/Recognition";
import Publications from "../pages/Publications";
import Projects from "../pages/Projects";
import People from "../pages/People";
import Home from "../pages/Home";
import COVID from "../pages/COVID";
import Additional from "../pages/Additional";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Publications" element={<Publications />} />
        <Route path="/Recognition" element={<Recognition />} />
        <Route path="/People" element={<People />} />
        <Route path="/Facility" element={<Facility />} />
        <Route path="/Teaching" element={<Teaching />} />
        <Route path="/Opportunity" element={<Opportunity />} />
        <Route path="/COVID" element={<COVID />} />
        <Route path="/Additional" element={<Additional />} />
      </Routes>
    </>
  );
}

export default App;
