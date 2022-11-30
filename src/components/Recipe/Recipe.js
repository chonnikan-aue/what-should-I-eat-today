import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const foodId = useParams().foodId;

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
      .then((res) => {
        let data = res.data.meals[0];
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div></div>;
};

export default Recipe;
