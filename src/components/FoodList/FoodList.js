import React, { useState } from "react";
import { Col } from "react-bootstrap";
import "./FoodList.css";
import Food from "../Food/Food";
import SeeRecipeButton from "../SeeRecipeButton/SeeRecipeButton";

const FoodList = (props) => {
  let [round, setRound] = useState(0);

  return (
    <>
      {props.chosenFood[0] && props.chosenFood[1] ? (
        <>
          {Object.keys(props.chosenFood[0]).length !== 0 ? (
            <Col className="food-col">
              <Food
                chosenFood={props.chosenFood}
                setChosenFood={props.setChosenFood}
                foodNum={0}
                round={round}
                setRound={setRound}
                dataLength={props.dataLength}
                dataIndexUsed={props.dataIndexUsed}
                setDataIndexUsed={props.setDataIndexUsed}
              ></Food>
              {Object.keys(props.chosenFood[1]).length === 0 ? (
                <SeeRecipeButton
                  setHeaderText={props.setHeaderText}
                  chosenFood={props.chosenFood[0]}
                />
              ) : null}
            </Col>
          ) : null}
          {Object.keys(props.chosenFood[1]).length !== 0 ? (
            <Col className="food-col">
              <Food
                chosenFood={props.chosenFood}
                setChosenFood={props.setChosenFood}
                foodNum={1}
                round={round}
                setRound={setRound}
                dataLength={props.dataLength}
                dataIndexUsed={props.dataIndexUsed}
                setDataIndexUsed={props.setDataIndexUsed}
              ></Food>
              {Object.keys(props.chosenFood[0]).length === 0 ? (
                <SeeRecipeButton
                  setHeaderText={props.setHeaderText}
                  chosenFood={props.chosenFood[1]}
                />
              ) : null}
            </Col>
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default FoodList;
