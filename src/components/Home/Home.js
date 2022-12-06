import React, { useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import Header from "../Header/Header";

const Home = (props) => {
  useEffect(() => {
    props.setHeaderText("What should I eat today?");
    props.activeNav(props.home);
  }, []);

  return (
    <Container>
      <Row>
        <Header headerText={props.headerText}></Header>
      </Row>
      <Row>
        <Link to="/random/all/all">
          <Button className="home-btn" type="button" variant="egg">
            Random me anything!
          </Button>
        </Link>
      </Row>
      <Row>
        <Link to="/categories">
          <Button className="home-btn" type="button" variant="egg">
            I want to eat...
          </Button>
        </Link>
      </Row>
      <Row>
        <Link to="/favorites">
          <Button className="home-btn" type="button" variant="egg">
            My favorites ❤
          </Button>
        </Link>
      </Row>
    </Container>
  );
};

export default Home;
