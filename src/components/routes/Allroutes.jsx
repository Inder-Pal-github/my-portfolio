import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";

import Resume from "../Resume";
const Allroutes = () => {
  return (
    <Routes>
        <Route path="/"  element={<Home/>} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};

export default Allroutes;