import React from "react";
import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
