import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SeeRecipeButton.css";

const SeeRecipeButton = (props) => {
  props.setHeaderText(`You chose ${props.chosenFood.foodName}!`);

  return (
    <Link to={`/recipe/${props.chosenFood.foodId}`}>
      <Button
        className="see-recipe-btn"
        type="button"
        variant="info"
        size="lg"
      >
        See Recipe
      </Button>
    </Link>
  );
};

export default SeeRecipeButton;
