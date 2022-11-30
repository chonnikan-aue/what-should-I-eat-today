import React from "react";
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdAutorenew } from "react-icons/md";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  return (
    <div className="hamburger-menu">
      <div className="main-nav">
        <GiHamburgerMenu />
      </div>
      <div className="sub-nav">
        <FaHome />
      </div>
      <div className="sub-nav">
        <MdAutorenew />
      </div>
    </div>
  );
};

export default HamburgerMenu;
