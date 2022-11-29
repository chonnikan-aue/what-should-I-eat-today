import React from "react";
import Food from "./Food";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const FoodList = (props) => {
  return (
    <Row>
      <Col>
        <Food
          chosenFood={props.chosenFood}
          setChosenFood={props.setChosenFood}
          foodNum={0}
        ></Food>
      </Col>
      <Col>
        <Food
          chosenFood={props.chosenFood}
          setChosenFood={props.setChosenFood}
          foodNum={1}
        ></Food>
      </Col>
    </Row>
  );
};

export default FoodList;
