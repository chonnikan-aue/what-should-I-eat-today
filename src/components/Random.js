import React, { useEffect } from "react";
import Header from "./Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import axios from "axios";
import FoodList from "./FoodList";

const Random = () => {
  let [chosenFood, setChosenFood] = useState([]);
  let foodNum = -1;

  const randomFood = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        const data = res.data.meals[0];
        console.log(data);
        setChosenFood([
          ...chosenFood,
          {
            foodNum: foodNum + 1,
            foodId: data.idMeal,
            foodPic: data.strMealThumb,
          },
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (chosenFood.length === 0) {
      console.log("dd");
      randomFood();
    }
    console.log("ss");
    randomFood();
    foodNum = -1;
  }, []);

  return (
    <Container>
      <Row>
        <Header></Header>
      </Row>
      <FoodList
        chosenFood={chosenFood}
        setChosenFood={setChosenFood}
      ></FoodList>
    </Container>
  );
};

export default Random;
