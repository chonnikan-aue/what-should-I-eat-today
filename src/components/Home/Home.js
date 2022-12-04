import React, { useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./Home.css";

const Home = (props) => {
  useEffect(() => {
    props.setHeaderText("What should I eat today?");
  }, []);

  return (
    <Container>
      <Row>
        <Header headerText={props.headerText}></Header>
      </Row>
      <Row>
        <Link
          to="/random/all/all"
          onClick={() => {
            props.activeNav(props.randomAll);
          }}
        >
          <Button className="home-btn" type="button" variant="dark">
            Random me anything!
          </Button>
        </Link>
      </Row>
      <Row>
        <Link
          to="/categories"
          onClick={() => {
            props.activeNav(props.categories);
          }}
        >
          <Button className="home-btn" type="button" variant="dark">
            I want to eat...
          </Button>
        </Link>
      </Row>
    </Container>
  );
};

export default Home;
