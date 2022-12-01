import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "./Header";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <Container>
      <Row>
        <Header headerText={props.headerText}></Header>
      </Row>
      <Row>
        <div>
          <Link to="/random">
            <Button type="button" variant="info" size="lg">
              <font>Random me anything!</font>
            </Button>
          </Link>
        </div>
      </Row>
      <Row>
        <div>
          <Link to="/category">
            <Button type="button" variant="info" size="lg">
              <font>I want to eat...</font>
            </Button>
          </Link>
        </div>
      </Row>
    </Container>
  );
};

export default Home;
