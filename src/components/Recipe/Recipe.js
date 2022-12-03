import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import "./Recipe.css";
import { Container, Col, Row, Button, Ratio, Alert } from "react-bootstrap";

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
      <img id="recipe-img" src={recipe.foodPic} alt={recipe.foodName} />
      <Row id="recipe-header">
        <Header headerText={props.headerText}></Header>
      </Row>
      <Row>
        <p className="recipe-btn-container">
          <Button className="recipe-btn" type="button" variant="dark">
            {recipe.foodCategory}
          </Button>
          <Button className="recipe-btn" stype="button" variant="dark">
            {recipe.foodCountry}
          </Button>
        </p>
      </Row>
      {recipe.foodYoutubeLink ? (
        <Row>
          <Ratio aspectRatio="16x9">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              src={`${recipe.foodYoutubeLink.split("watch?v=")[0]}embed/${
                recipe.foodYoutubeLink.split("watch?v=")[1]
              }`}
              title={props.headerText}
              allowFullScreen
            ></iframe>
          </Ratio>
        </Row>
      ) : (
        <Alert variant="dark">No video for this recipe!</Alert>
      )}
      <Row id="recipe-detail">
        <Col>
          <Row>
            <p>
              <strong>Ingredients: </strong>
            </p>
          </Row>
          <Row>
            <ol>{ingredientsList}</ol>
          </Row>
        </Col>
        <Col>
          <Row>
            <p>
              <strong>Instructions: </strong>
            </p>
          </Row>
          <Row>
            <ol>{instructionsList}</ol>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Recipe;
