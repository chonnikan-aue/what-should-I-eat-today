import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Col } from "react-bootstrap";

const Food = (props) => {
  let food = props.chosenFood[props.foodNum];
  let indexLeft = [0, 1].filter((num) => {
    return num !== props.foodNum;
  });
  let [data, setData] = useState({});
  const foodImg = useRef();

  const randomFoodTemp = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        const data = res.data.meals[0];
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    randomFoodTemp();
  }, []);

  const selectedFood = () => {
    props.setCount(props.count + 1);
    props.setChosenFood(
      Object.assign([], props.chosenFood, { [props.foodNum]: food })
    );
    if (props.count < 6) {
      props.setChosenFood(
        Object.assign([], props.chosenFood, {
          [indexLeft]: {
            foodId: data.idMeal,
            foodPic: data.strMealThumb,
            foodName: data.strMeal,
          },
        })
      );
      randomFoodTemp();
    } else {
      props.setChosenFood(
        Object.assign([], props.chosenFood, {
          [indexLeft]: {},
        })
      );
      foodImg.current.classList.add("chosen-food");
    }
  };

  return (
    <Col>
      {food ? (
        <img
          ref={foodImg}
          src={food.foodPic}
          alt={food.foodName}
          onClick={selectedFood}
        />
      ) : null}
    </Col>
  );
};

export default Food;
