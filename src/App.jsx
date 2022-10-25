import React from "react";
import Events from "./Components/Events";
import Landing from "./Components/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
