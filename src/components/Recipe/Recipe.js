import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row, Button, Ratio, Alert } from "react-bootstrap";
import axios from "axios";
import "./Recipe.css";
import Header from "../Header/Header";

const Recipe = (props) => {
  const foodId = useParams().foodId;
  let [recipe, setRecipe] = useState([]);
  let [ingredientsList, setIngredientsList] = useState();
  let [instructionsList, setInstructionsList] = useState();
  let [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  useEffect(() => {
    if (Object.keys(recipe).length !== 0) {
      if (favorite) {
        localStorage.setItem(
          foodId,
          JSON.stringify({
            foodId: foodId,
            foodName: recipe.foodName,
            foodPic: recipe.foodPic,
            foodCategory: recipe.foodCategory,
            foodCountry: recipe.foodCountry,
          })
        );
      } else {
        localStorage.removeItem(foodId);
      }
    }
  }, [favorite]);

  useEffect(() => {
    if (localStorage.getItem(foodId)) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
    props.activeNav(props.hamburger);
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
      <Row className="favorite-recipe-row">
        {favorite ? (
          <img
            id="favorite-recipe-icon"
            src="https://assets.webiconspng.com/uploads/2017/09/Heart-PNG-Image-33152.png"
            alt="unfavorite recipe icon"
            onClick={handleFavorite}
          />
        ) : (
          <img
            id="favorite-recipe-icon"
            src="https://clipartcraft.com/images/clipart-heart-outline-4.png"
            alt="favorite recipe icon"
            onClick={handleFavorite}
          />
        )}
      </Row>
      <Row className="recipe-header">
        <Header headerText={props.headerText}></Header>
      </Row>
      <Row>
        <p className="tag-btn-container">
          <Button className="tag-btn" type="button" variant="egg">
            {recipe.foodCategory}
          </Button>
          <Button className="tag-btn" stype="button" variant="egg">
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
      <Row>
        <Col
          md="auto"
          className="dotted-border recipe-detail ingredient-fit-content"
        >
          <Row>
            <h2 className="underline-h2">Ingredients: </h2>
          </Row>
          <Row>
            <ol>{ingredientsList}</ol>
          </Row>
        </Col>
        <Col className="dotted-border recipe-detail">
          <Row>
            <h2 className="underline-h2">Instructions: </h2>
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
