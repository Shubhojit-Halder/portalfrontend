import React from "react";
import Events from "./Components/Events";
import Landing from "./Components/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Components/Registration";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/home" element={<Landing />}/>
        <Route path="/events" element={<Events />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
