import React from "react";
import "./styles/home.css";
import panadol from "./images/panadol.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";

function Home() {
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
    <div className="home-container">
      <div>
        <h1 className="home-header">Store</h1>
        <p className="underline"></p>
      </div>
      <div className="home-items-container">
        <div className="home-item">
          <h2>Panadol</h2>
          <hr />
          <img src={panadol} alt="img" height="100px" width="100px" />
          <div className="home-item-info">
            <h4>Price = 10 $</h4>
            <h4>InStock = 25 items</h4>
            <div className="home-icon-container">
              <FontAwesomeIcon
                icon={faLessThan}
                className="icon"
                style={icon}
              />
              <h4 className="home-item-counter">0</h4>
              <FontAwesomeIcon
                icon={faGreaterThan}
                className="icon"
                style={icon}
              />
            </div>
            <button className="blue-button">Add To Cart</button>
          </div>
        </div>
        <div className="home-item">
          <h2>Panadol</h2>
          <hr />
          <img src={panadol} alt="img" height="100px" width="100px" />
          <div className="home-item-info">
            <h4>Price = 10 $</h4>
            <h4>InStock = 25 items</h4>
            <div className="home-icon-container">
              <FontAwesomeIcon
                icon={faLessThan}
                className="icon"
                style={icon}
              />
              <h4 className="home-item-counter">0</h4>
              <FontAwesomeIcon
                icon={faGreaterThan}
                className="icon"
                style={icon}
              />
            </div>
            <button className="blue-button">Add To Cart</button>
          </div>
        </div>
        <div className="home-item">
          <h2>Panadol</h2>
          <hr />
          <img src={panadol} alt="img" height="100px" width="100px" />
          <div className="home-item-info">
            <h4>Price = 10 $</h4>
            <h4>InStock = 25 items</h4>
            <div className="home-icon-container">
              <FontAwesomeIcon
                icon={faLessThan}
                className="icon"
                style={icon}
              />
              <h4 className="home-item-counter">0</h4>
              <FontAwesomeIcon
                icon={faGreaterThan}
                className="icon"
                style={icon}
              />
            </div>
            <button className="blue-button">Add To Cart</button>
          </div>
        </div>
        <div className="home-item">
          <h2>Panadol</h2>
          <hr />
          <img src={panadol} alt="img" height="100px" width="100px" />
          <div className="home-item-info">
            <h4>Price = 10 $</h4>
            <h4>InStock = 25 items</h4>
            <div className="home-icon-container">
              <FontAwesomeIcon
                icon={faLessThan}
                className="icon"
                style={icon}
              />
              <h4 className="home-item-counter">0</h4>
              <FontAwesomeIcon
                icon={faGreaterThan}
                className="icon"
                style={icon}
              />
            </div>
            <button className="blue-button">Add To Cart</button>
          </div>
        </div>
        <div className="home-item">
          <h2>Panadol</h2>
          <hr />
          <img src={panadol} alt="img" height="100px" width="100px" />
          <div className="home-item-info">
            <h4>Price = 10 $</h4>
            <h4>InStock = 25 items</h4>
            <div className="home-icon-container">
              <FontAwesomeIcon
                icon={faLessThan}
                className="icon"
                style={icon}
              />
              <h4 className="home-item-counter">0</h4>
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
  "margin-right": "20px",
};
export default Home;
