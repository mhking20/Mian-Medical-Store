import React, { useEffect, useState, useRef } from "react";
import "./styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

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
  const [array, setarray] = useState([]);

  let mark = true;
  const el = useRef();

  const Products = async () => {
    try {
      let prod;
      if (mark) {
        const products = await axios.get(
          "https://mian-medical-store.onrender.com/"
        );
        prod = products.data.products;
      } else {
        const products = await axios.get("http://localhost:5000");
        prod = products.data.products;
      }

      setarray(prod);
      return prod;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Products();
  });

  const handleClick = (e) => {
      el.current.innerHTML = 5
  };

  return (
    <div className="home-container">
      <div>
        <h1 className="home-header">Store</h1>
        <p className="underline"></p>
      </div>
      <div className="home-items-container">
        {array.map((item) => {
          return (
            <div className="home-item" key={item._id} data-set-id={item._id}>
              <h2>{item.name}</h2>
              <hr />
              <img src={item.image} alt="img" height="100px" width="100px" />
              <div className="home-item-info">
                <h4>Price = {item.price} $</h4>
                <h4>InStock = {item.instock} items</h4>
                <div className="home-icon-container" data-set-id={item._id}>
                  <FontAwesomeIcon
                    icon={faLessThan}
                    className="icon"
                    onClick={(e) => handleClick(e)}
                  />

                  <h4 className="home-item-counter" ref={el}>
                  0
                  </h4>
                  <FontAwesomeIcon
                    icon={faGreaterThan}
                    className="icon"
                    onClick={(e) => handleClick(e)}
                  />
                </div>
                <button className="blue-button">Buy Product</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
