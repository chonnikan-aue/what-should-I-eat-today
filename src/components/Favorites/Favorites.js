import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Favorites.css";
import Header from "../Header/Header";

const Favorites = (props) => {
  let [favoritesDiv, setFavoritesDiv] = useState();

  useEffect(() => {
    props.setHeaderText("What should I eat today?");
    props.activeNav(props.favorites);
    let favorites = Object.keys(localStorage).map((item, index) => {
      const itemObj = JSON.parse(localStorage[item]);
      return (
        <Col key={index} className="favorites-col">
          <Link to={`/recipe/${itemObj.foodId}`}>
            <Col className="mat">
              <img
                className="favorites-img"
                src={itemObj.foodPic}
                alt={itemObj.foodName}
              />
            </Col>
            <Col>
              <Row md="auto" className="favorites-food-name-row">
                <h1 className="favorites-food-name-h1">{itemObj.foodName}</h1>
              </Row>
              <Row>
                <p className="tag-btn-container">
                  <Button className="tag-btn" type="button" variant="dark">
                    {itemObj.foodCategory}
                  </Button>
                  <Button className="tag-btn" stype="button" variant="dark">
                    {itemObj.foodCountry}
                  </Button>
                </p>
              </Row>
            </Col>
          </Link>
        </Col>
      );
    });
    setFavoritesDiv(favorites);
  }, []);

  return (
    <Container>
      <Row>
        <Header headerText={props.headerText}></Header>
      </Row>
      <Row>{favoritesDiv}</Row>
    </Container>
  );
};

export default Favorites;
