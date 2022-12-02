import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Food = (props) => {
  const filter = useParams().filter;
  const categoryName = useParams().categoryName;
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

  const randomSpecificFoodTemp = () => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?${filter}=${categoryName}`
      )
      .then((res) => {
        const allData = res.data.meals;
        let random = Math.floor(Math.random() * props.dataLength);
        for (let i = 0; i < props.dataLength; i++) {
          if (props.dataIndexUsed.indexOf(random) === -1) {
            console.log(props.dataIndexUsed, random);
            const data = allData[random];
            setData(data);
            props.setDataIndexUsed((prevState) => [...prevState, random]);
            break;
          } else {
            random = Math.floor(Math.random() * props.dataLength);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (filter === "all") {
      randomFoodTemp();
    } else {
      randomSpecificFoodTemp();
    }
  }, []);

  const selectedFood = () => {
    props.setRound(props.round + 1);
    props.setChosenFood(
      Object.assign([], props.chosenFood, { [props.foodNum]: food })
    );
    if (props.round < Math.min(11, props.dataLength)) {
      props.setChosenFood(
        Object.assign([], props.chosenFood, {
          [indexLeft]: {
            foodId: data.idMeal,
            foodPic: data.strMealThumb,
            foodName: data.strMeal,
          },
        })
      );
      if (filter === "all") {
        randomFoodTemp();
      } else {
        randomSpecificFoodTemp();
      }
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
    <div className="mat">
      {food ? (
        <img
          className="random-img"
          ref={foodImg}
          src={food.foodPic}
          alt={food.foodName}
          onClick={selectedFood}
        />
      ) : null}
    </div>
  );
};

export default Food;
