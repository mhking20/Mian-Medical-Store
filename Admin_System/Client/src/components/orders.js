import React, { useEffect, useState } from "react";
import "./Styles/products.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Orders() {
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
  const Orders = async () => {
    try {
      let orders = await axios.get("http://localhost:8000");
      setarray(orders.data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Orders();
  }, []);

    return (
    <div className="products-container">
      <div className="products-header-container">
        <h1 className="products-header">Orders To Complete</h1>
        <p className="underline"></p>
      </div>
      <div className="products-items-container">
        {array.map((item) => {
          return (
            <div className="products-item" key={item._id}>
              <h2>{item.name}</h2>
              <hr />
              <div className="products-item-info">
                <h4>Total Price = {item.price} $</h4>
                <h4>Items To Buy = {item.instock} items</h4>
                <h4>Address = Khushab</h4>
                <h4>Phone Number = 03077854477</h4>
                <h4>Time Left = {item.time}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
