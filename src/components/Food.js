import React, { useEffect } from "react";

const Food = (props) => {
  let food = props.chosenFood;
  const selectedFood = () => {
    props.setChosenFood(
      Object.assign([], props.chosenFood, { [props.foodNum]: food })
    );
  };


  return (
    <div>
      { food ? 
        <img src={food.foodPic} alt={food.foodName} onClick={selectedFood} />
      :
      null
    }
    </div>
  );
};

export default Food;
