import React, { useEffect } from "react";
import Header from "./Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import axios from "axios";
import FoodList from "./FoodList";

const Random = () => {
  let [chosenFood, setChosenFood] = useState([]);

  const randomFood = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        const data = res.data.meals[0];
        console.log(data);
        setChosenFood((prevState) => [
          ...prevState,
          {
            foodId: data.idMeal,
            foodPic: data.strMealThumb,
            foodName: data.strMeal,
          },
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    randomFood();
    randomFood();
  }, []);

  return (
    <Container>
      <Row>
        <Header></Header>
      </Row>
      <FoodList chosenFood={chosenFood} setChosenFood={setChosenFood} />
    </Container>
  );
};

export default Random;
