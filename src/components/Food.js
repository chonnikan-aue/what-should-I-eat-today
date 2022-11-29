import React, { useEffect } from "react";

const Food = (props) => {
  let food = props.chosenFood[props.foodNum];
  const selectedFood = () => {
    props.setChosenFood([food]);
  };
  return (
    <img src={food.foodPic} alt={food.foodName} onClick={selectedFood}></img>
  );
};

export default Food;
