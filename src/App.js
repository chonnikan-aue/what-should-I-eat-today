import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Random from "./components/Random";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/random" element={<Random></Random>}></Route>
      </Routes>
    </div>
  );
};

export default App;
