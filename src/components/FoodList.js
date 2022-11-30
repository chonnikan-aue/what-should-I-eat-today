import React from "react";
import Food from "./Food";
import Row from "react-bootstrap/Row";
import { useState } from "react";

const FoodList = (props) => {
  let [count, setCount] = useState(0);

  return (
    <Row>
      {props.chosenFood[0] && props.chosenFood[1] ? (
        <Row>
          {Object.keys(props.chosenFood[0]).length !== 0 ? (
            <Food
              chosenFood={props.chosenFood}
              setChosenFood={props.setChosenFood}
              foodNum={0}
              count={count}
              setCount={setCount}
            ></Food>
          ) : null}
          {Object.keys(props.chosenFood[1]).length !== 0 ? (
            <Food
              chosenFood={props.chosenFood}
              setChosenFood={props.setChosenFood}
              foodNum={1}
              count={count}
              setCount={setCount}
            ></Food>
          ) : null}
        </Row>
      ) : null}
    </Row>
  );
};

export default FoodList;
