import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Header from "../Header";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = (props) => {
  let [categoriesDiv, setCategoriesDiv] = useState();
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        let data = res.data.categories;
        let categories = data.map((category, index) => {
          return (
            <Col key={index}>
              <Link to={`/random/c/${category.strCategory}`}>
                <div className="mat">
                  <img
                    className="categories-img"
                    src={category.strCategoryThumb}
                    alt={category.strCategory}
                  />
                </div>
                <p>{category.strCategory}</p>
              </Link>
            </Col>
          );
        });
        setCategoriesDiv(categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Header headerText={props.headerText}></Header>
      </Row>
      <Row>
        <h2>Categories</h2>
      </Row>
      <Row>{categoriesDiv}</Row>
      <Row>
        <h2>Country</h2>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default Categories;
