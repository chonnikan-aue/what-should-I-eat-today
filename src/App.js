import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Random from "./components/Random";
import Home from "./components/Home";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";

const App = () => {
  let [headerText, setHeaderText] = useState("What should I eat today?");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home headerText={headerText} />} />
        <Route
          path="/random"
          element={
            <Random headerText={headerText} setHeaderText={setHeaderText} />
          }
        />
        <Route path="/recipe/:foodId" element={<Random />} />
        <Route path="/test" element={<HamburgerMenu />} />
      </Routes>
    </div>
  );
};

export default App;
