import React, { useEffect, useState } from "react";
import "./Styles/products.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  let [array, setarray] = useState([]);
  let navigate = useNavigate();
  const product = async () => {
    try {
      let prod = await axios.get("http://localhost:8000");
      setarray(prod.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    product();
  }, []);

  const handleClick = (e) => {
    if (e.target.textContent.includes("New")) {
      navigate("/productform");
    }
  };
  return (
    <div className="products-container">
      <div className="products-header-container">
        <h1 className="products-header">Available Products</h1>
        <p className="underline"></p>
      </div>
      <div className="product-add-button">
        <button className="blue-button" onClick={(e) => handleClick(e)}>
          Add New Product
        </button>
      </div>
      <div className="products-items-container">
        {array.map((item) => {
          return (
            <div className="products-item" key={item._id}>
              <h2>{item.name}</h2>
              <hr />
              <img src={item.image} alt="img" height="100px" width="100px" />
              <div className="products-item-info">
                <h4>Price = {item.price} $</h4>
                <h4>InStock = {item.instock} items</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
