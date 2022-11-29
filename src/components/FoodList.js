import React from "react";
import Food from "./Food";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const FoodList = (props) => {
  return (
    <Row>
      <Col>
        <Food></Food>
      </Col>
      <Col>
        <Food></Food>
      </Col>
    </Row>
  );
};

export default FoodList;
