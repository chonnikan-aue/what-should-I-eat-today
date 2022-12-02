import React, { useEffect, useState } from "react";
import Header from "./Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import axios from "axios";
import FoodList from "./FoodList";
import { useParams } from "react-router-dom";

const Random = (props) => {
  const filter = useParams().filter;
  const categoryName = useParams().categoryName;
  let [chosenFood, setChosenFood] = useState([]);
  const randomFood = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        const data = res.data.meals[0];
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

  const randomSpecificFood = () => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?${filter}=${categoryName}`
      )
      .then((res) => {
        const allData = res.data.meals;
        const random = Math.floor(Math.random() * allData.length);
        const data = allData[random];
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
    if (filter === "all") {
      randomFood();
      randomFood();
    } else {
      randomSpecificFood();
      randomSpecificFood();
    }
  }, []);

  return (
    <Container>
      <Row>
        <Header headerText={props.headerText} />
      </Row>
      <FoodList
        chosenFood={chosenFood}
        setChosenFood={setChosenFood}
        setHeaderText={props.setHeaderText}
      />
    </Container>
  );
};

export default Random;
