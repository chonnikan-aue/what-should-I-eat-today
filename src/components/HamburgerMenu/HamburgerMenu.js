import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { MdRestaurantMenu, MdManageSearch } from "react-icons/md";
import { BiHomeHeart } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./HamburgerMenu.css";

const HamburgerMenu = (props) => {
  const home = useRef();
  const randomAll = useRef();
  const categories = useRef();
  const activeNav = (ref) => {
    home.current.classList.remove("active");
    randomAll.current.classList.remove("active");
    categories.current.classList.remove("active");
    ref.current.classList.add("active");
  };
  return (
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
  );
};

export default HamburgerMenu;
