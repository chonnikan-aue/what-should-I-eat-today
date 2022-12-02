import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdAutorenew } from "react-icons/md";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    // <div className="hamburger-menu">
    //   <div className="main-nav">
    //     <GiHamburgerMenu />
    //   </div>
    //   <div className="sub-nav">
    //     <FaHome />
    //   </div>
    //   <div className="sub-nav">
    //     <MdAutorenew />
    //   </div>
    // </div>

    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="top">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HamburgerMenu;
