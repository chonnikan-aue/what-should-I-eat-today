import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../Header/Header";

const Favorites = (props) => {
  useEffect(() => {
    props.setHeaderText("What should I eat today?");
    props.activeNav(props.favorites);
  }, []);

  return (
    <Container>
      <Row>
        <Header headerText={props.headerText}></Header>
      </Row>
    </Container>
  );
};

export default Favorites;
