import React from "react";
import "./Styles/products.css";
import panadol from "./images/panadol.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";

function Products() {
  return (
    <div>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
    </div>
  );
};

const Content = () => {
  return (
    <div className="products-container">
      <div>
        <h1 className="products-header">Available Products</h1>
        <p className="underline"></p>
      </div>
      <div className="products-items-container">
        <div className="products-item">
          <h2>Panadol</h2>
          <hr />
          <img src={panadol} alt="img" height="100px" width="100px" />
          <div className="products-item-info">
            <h4>Price = 10 $</h4>
            <h4>InStock = 25 items</h4>
            <div className="products-icon-container">
              <FontAwesomeIcon
                icon={faLessThan}
                className="icon"
                style={icon}
              />
              <h4 className="products-item-counter">0</h4>
              <FontAwesomeIcon
                icon={faGreaterThan}
                className="icon"
                style={icon}
              />
            </div>
            <button className="blue-button">Add To Cart</button>
          </div>
        </div>
        <div className="products-item">
          <h2>Panadol</h2>
          <hr />
          <img src={panadol} alt="img" height="100px" width="100px" />
          <div className="products-item-info">
            <h4>Price = 10 $</h4>
            <h4>InStock = 25 items</h4>
            <div className="products-icon-container">
              <FontAwesomeIcon
                icon={faLessThan}
                className="icon"
                style={icon}
              />
              <h4 className="products-item-counter">0</h4>
              <FontAwesomeIcon
                icon={faGreaterThan}
                className="icon"
                style={icon}
              />
            </div>
            <button className="blue-button">Add To Cart</button>
          </div>
        </div>
        <div className="products-item">
          <h2>Panadol</h2>
          <hr />
          <img src={panadol} alt="img" height="100px" width="100px" />
          <div className="products-item-info">
            <h4>Price = 10 $</h4>
            <h4>InStock = 25 items</h4>
            <div className="products-icon-container">
              <FontAwesomeIcon
                icon={faLessThan}
                className="icon"
                style={icon}
              />
              <h4 className="products-item-counter">0</h4>
              <FontAwesomeIcon
                icon={faGreaterThan}
                className="icon"
                style={icon}
              />
            </div>
            <button className="blue-button">Add To Cart</button>
          </div>
        </div>
        <div className="products-item">
          <h2>Panadol</h2>
          <hr />
          <img src={panadol} alt="img" height="100px" width="100px" />
          <div className="products-item-info">
            <h4>Price = 10 $</h4>
            <h4>InStock = 25 items</h4>
            <div className="products-icon-container">
              <FontAwesomeIcon
                icon={faLessThan}
                className="icon"
                style={icon}
              />
              <h4 className="products-item-counter">0</h4>
              <FontAwesomeIcon
                icon={faGreaterThan}
                className="icon"
                style={icon}
              />
            </div>
            <button className="blue-button">Add To Cart</button>
          </div>
        </div>
        <div className="products-item">
          <h2>Panadol</h2>
          <hr />
          <img src={panadol} alt="img" height="100px" width="100px" />
          <div className="products-item-info">
            <h4>Price = 10 $</h4>
            <h4>InStock = 25 items</h4>
            <div className="products-icon-container">
              <FontAwesomeIcon
                icon={faLessThan}
                className="icon"
                style={icon}
              />
              <h4 className="products-item-counter">0</h4>
              <FontAwesomeIcon
                icon={faGreaterThan}
                className="icon"
                style={icon}
              />
            </div>
            <button className="blue-button">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const icon = {
  "margin-left": "20px",
  "margin-right": "20px"
}
export default Products;
