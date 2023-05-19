import React, { useEffect, useState } from "react";
import "./Styles/products.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Admins() {
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
  const Admin = async () => {
    try {
      let admin = await axios.get("http://localhost:8000/admin");
      setarray(admin.data.admins);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Admin();
  }, []);

  const handleClick = (e) => {
    if (e.target.textContent.includes("New")) {
      navigate("/adminform");
    }
  };
  return (
    <div className="products-container">
      <div className="products-header-container">
        <h1 className="products-header">Admins</h1>
        <p className="underline"></p>
      </div>
      <div className="product-add-button">
        <button className="blue-button" onClick={(e) => handleClick(e)}>
          Add New Admin
        </button>
      </div>
      <div className="products-items-container">
        {array.map((item) => {
          return (
            <div className="products-item" key={item._id}>
              <h2>{item.name}</h2>
              <hr />
              <div className="products-item-info">
                <h4>Username = {item.username} $</h4>
                <h4>Address = {item.address} items</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Admins;
