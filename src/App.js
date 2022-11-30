import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Random from "./components/Random";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </div>
  );
};

export default App;
