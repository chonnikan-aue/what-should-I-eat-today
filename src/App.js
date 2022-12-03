import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Random from "./components/Random";
import Home from "./components/Home";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import Recipe from "./components/Recipe/Recipe";
import Categories from "./components/Categories/Categories";
import { Row, Col } from "react-bootstrap";

const App = () => {
  let [headerText, setHeaderText] = useState("What should I eat today?");

  useEffect(() => {
    setHeaderText("What should I eat today?");
  }, []);

  return (
    <div className="App">
      <Row>
        <HamburgerMenu></HamburgerMenu>
        <Col className="container-col">
          <Routes>
            <Route
              path="/"
              element={
                <Home headerText={headerText} setHeaderText={setHeaderText} />
              }
            />
            <Route path="/home" element={<Navigate to="/" />}></Route>
            <Route path="/index" element={<Navigate to="/" />}></Route>
            <Route
              path="/categories"
              element={
                <Categories
                  headerText={headerText}
                  setHeaderText={setHeaderText}
                />
              }
            />
            <Route
              path="/category"
              element={<Navigate to="/categories" />}
            ></Route>
            <Route
              path="/random/:filter/:categoryName"
              element={
                <Random headerText={headerText} setHeaderText={setHeaderText} />
              }
            />
            <Route
              path="/recipe/:foodId"
              element={
                <Recipe headerText={headerText} setHeaderText={setHeaderText} />
              }
            />
            <Route path="/test" element={<HamburgerMenu />} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
};

export default App;
