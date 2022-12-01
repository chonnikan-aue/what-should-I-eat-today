import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const foodId = useParams().foodId;
  let [recipe, setRecipe] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
      .then((res) => {
        let data = res.data.meals[0];
        let ingredientArr = [];
        for (let i = 1; i <= 20; i++) {
          let measure = data[`strMeasure${i}`];
          let ingredient = data[`strIngredient${i}`];
          if (measure && ingredient) {
            //to catch some data that being null (null can't call trim())
            let item = `${measure.trim()} ${ingredient.trim()}`.trim();
            if (item !== "") {
              ingredientArr.push(item);
            }
          }
        }
        setRecipe({
          foodPic: data.strMealThumb,
          foodName: data.strMeal,
          foodCountry: data.strArea,
          foodCategory: data.strCategory,
          foodYoutubeLink: data.strYoutube,
          foodIngredient: ingredientArr,
          foodInstructions: data.strInstructions.split(". "),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div></div>;
};

export default Recipe;
