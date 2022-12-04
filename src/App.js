import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { MdRestaurantMenu, MdManageSearch } from "react-icons/md";
import { BiHomeHeart } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import Random from "./components/Random";
import Home from "./components/Home/Home";
import Recipe from "./components/Recipe/Recipe";
import Categories from "./components/Categories/Categories";
import { Row, Col } from "react-bootstrap";

const App = () => {
  let [headerText, setHeaderText] = useState("What should I eat today?");
  const home = useRef();
  const randomAll = useRef();
  const categories = useRef();

  const activeNav = (ref) => {
    home.current.classList.remove("active");
    randomAll.current.classList.remove("active");
    categories.current.classList.remove("active");
    ref.current.classList.add("active");
  };

  useEffect(() => {
    setHeaderText("What should I eat today?");
  }, []);

  return (
    <div className="App">
      <Row className="app-row">
        <Col md="auto" className="hamburger-col">
          <Col className="menu-nav">
            <HiMenu />
          </Col>
          <Col
            className="menu-nav active"
            ref={home}
            onClick={() => {
              activeNav(home);
            }}
          >
            <Link to="/">
              <BiHomeHeart />
            </Link>
          </Col>
          <Col
            className="menu-nav"
            ref={categories}
            onClick={() => {
              activeNav(categories);
            }}
          >
            <Link to="/categories">
              <MdManageSearch />
            </Link>
          </Col>
          <Col
            className="menu-nav"
            ref={randomAll}
            onClick={() => {
              activeNav(randomAll);
            }}
          >
            <Link to="/random/all/all">
              <MdRestaurantMenu />
            </Link>
          </Col>
        </Col>
        <Col className="container-col">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  randomAll={randomAll}
                  categories={categories}
                  activeNav={activeNav}
                  headerText={headerText}
                  setHeaderText={setHeaderText}
                />
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
          </Routes>
        </Col>
      </Row>
    </div>
  );
};

export default App;
