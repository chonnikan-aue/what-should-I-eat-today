import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "../Header";

const Recipe = (props) => {
  const foodId = useParams().foodId;
  let [recipe, setRecipe] = useState([]);
  let [ingredientsList, setIngredientsList] = useState();
  let [instructionsList, setInstructionsList] = useState();

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

  useEffect(() => {
    // check if recipe not empty (have information about dish)
    if (Object.keys(recipe).length !== 0) {
      props.setHeaderText(`${recipe.foodName}`);

      const ingredients = recipe.foodIngredient.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>;
      });
      setIngredientsList(ingredients);

      const instructions = recipe.foodInstructions.map((step, index) => {
        return <li key={index}>{step}</li>;
      });
      setInstructionsList(instructions);
    }
  }, [recipe]);

  return (
    <Container>
      <Row>
        <Header headerText={props.headerText}></Header>
      </Row>
      <Row>
        <p>
          <strong>Category: </strong>
          {recipe.foodCategory}
        </p>
      </Row>
      <Row>
        <p>
          <strong>Country: </strong>
          {recipe.foodCountry}
        </p>
      </Row>
      <Row>
        <Row>
          <p>
            <strong>Ingredients: </strong>
          </p>
        </Row>
        <Row>
          <ol>{ingredientsList}</ol>
        </Row>
      </Row>
      <Row>
        <Row>
          <p>
            <strong>Instructions: </strong>
          </p>
        </Row>
        <Row>
          <ol>{instructionsList}</ol>
        </Row>
      </Row>
      {recipe.foodYoutubeLink ? (
        <Row>
          <p>
            <strong>More details: </strong>
            <a href={recipe.foodYoutubeLink} target="_blank">
              {recipe.foodYoutubeLink}
            </a>
          </p>
        </Row>
      ) : null}
    </Container>
  );
};

export default Recipe;
