import React, { useEffect } from "react";
import Header from "./Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import axios from "axios";
import FoodList from "./FoodList";

const Random = () => {
  let [chosenFood, setChosenFood] = useState([]);
  let [foodList, setFoodList] = useState([]);
  let [foodNum, setFoodNum] = useState(0);

  const randomFood = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        const data = res.data.meals[0];
        console.log(data);
        setChosenFood([
          ...chosenFood.slice(0, foodNum),
          {
            foodNum: foodNum,
            foodId: data.idMeal,
            foodPic: data.strMealThumb,
            foodName: data.strMeal,
          },
          ...chosenFood.slice(foodNum + 1),
        ]);
        setFoodNum(foodNum + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (chosenFood.length === 0) {
      console.log("begin");
      randomFood();
    }
    return () => {
      if (chosenFood.length < 2) {
        console.log("second dish");
        randomFood();
      } else {
        console.log("show pic", chosenFood);
        setFoodList(
          <FoodList
            chosenFood={chosenFood}
            setChosenFood={setChosenFood}
          ></FoodList>
        );
      }
    };
  }, [chosenFood]);

  return (
    <Container>
      <Row>
        <Header></Header>
      </Row>
      {foodList}
    </Container>
  );
};

export default Random;
