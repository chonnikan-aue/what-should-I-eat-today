import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SeeRecipeButton.css";

const SeeRecipeButton = (props) => {
  useEffect(() => {
    props.setHeaderText(`You chose ${props.chosenFood.foodName}!`);
  }, []);

  return (
    <Link to={`/recipe/${props.chosenFood.foodId}`}>
      <Button className="see-recipe-btn" type="button" variant="info" size="lg">
        <font>See Recipe</font>
      </Button>
    </Link>
  );
};

export default SeeRecipeButton;
