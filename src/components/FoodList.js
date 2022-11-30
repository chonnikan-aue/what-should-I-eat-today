import React from "react";
import Food from "./Food";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";

const FoodList = (props) => {
  let [count, setCount] = useState(0);

  return (
    <Row>
      <Col>
        <Food
          chosenFood={props.chosenFood}
          setChosenFood={props.setChosenFood}
          foodNum={0}
          count={count}
          setCount={setCount}
        ></Food>
      </Col>
      <Col>
        <Food
          chosenFood={props.chosenFood}
          setChosenFood={props.setChosenFood}
          foodNum={1}
          count={count}
          setCount={setCount}
        ></Food>
      </Col>
    </Row>
  );
};

export default FoodList;
