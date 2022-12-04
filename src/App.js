import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { MdOutlineFastfood, MdManageSearch } from "react-icons/md";
import { BiHomeHeart } from "react-icons/bi";
import { HiMenu, HiOutlineHeart } from "react-icons/hi";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Random from "./components/Random/Random";
import Home from "./components/Home/Home";
import Recipe from "./components/Recipe/Recipe";
import Categories from "./components/Categories/Categories";
import Favorites from "./components/Favorites/Favorites";

const App = () => {
  let [headerText, setHeaderText] = useState("What should I eat today?");
  const hamburger = useRef();
  const home = useRef();
  const randomAll = useRef();
  const categories = useRef();
  const favorites = useRef();

  const activeNav = (ref) => {
    hamburger.current.classList.remove("active");
    home.current.classList.remove("active");
    randomAll.current.classList.remove("active");
    categories.current.classList.remove("active");
    favorites.current.classList.remove("active");
    ref.current.classList.add("active");
  };

  useEffect(() => {
    setHeaderText("What should I eat today?");
  }, []);

  return (
    <div className="App">
      <Row className="app-row">
        <Col md="auto" className="hamburger-col">
          <Col className="menu-nav" ref={hamburger}>
            <HiMenu className="hamburger-icon" />
          </Col>
          <Col className="menu-nav active" ref={home}>
            <Link to="/">
              <BiHomeHeart className="hamburger-icon" />
            </Link>
          </Col>
          <Col className="menu-nav" ref={categories}>
            <Link to="/categories">
              <MdManageSearch className="hamburger-icon" />
            </Link>
          </Col>
          <Col className="menu-nav" ref={randomAll}>
            <Link to="/random/all/all">
              <MdOutlineFastfood className="hamburger-icon" />
            </Link>
          </Col>
          <Col className="menu-nav" ref={favorites}>
            <Link to="/favorites">
              <HiOutlineHeart className="hamburger-icon" />
            </Link>
          </Col>
        </Col>

        <Col className="container-col">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  headerText={headerText}
                  setHeaderText={setHeaderText}
                  home={home}
                  activeNav={activeNav}
                />
              }
            />
            <Route
              path="/categories"
              element={
                <Categories
                  headerText={headerText}
                  setHeaderText={setHeaderText}
                  categories={categories}
                  activeNav={activeNav}
                />
              }
            />
            <Route
              path="/random/:filter/:categoryName"
              element={
                <Random
                  headerText={headerText}
                  setHeaderText={setHeaderText}
                  randomAll={randomAll}
                  activeNav={activeNav}
                />
              }
            />
            <Route
              path="/recipe/:foodId"
              element={
                <Recipe
                  headerText={headerText}
                  setHeaderText={setHeaderText}
                  hamburger={hamburger}
                  activeNav={activeNav}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <Favorites
                  headerText={headerText}
                  setHeaderText={setHeaderText}
                  favorites={favorites}
                  activeNav={activeNav}
                />
              }
            />
            <Route path="/home" element={<Navigate to="/" />}></Route>
            <Route path="/index" element={<Navigate to="/" />}></Route>
            <Route
              path="/category"
              element={<Navigate to="/categories" />}
            ></Route>{" "}
            <Route
              path="/favorite"
              element={<Navigate to="/favorites" />}
            ></Route>
          </Routes>
        </Col>
      </Row>
    </div>
  );
};

export default App;
