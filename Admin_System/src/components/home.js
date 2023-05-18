import React from "react";
import "./Styles/home.css";

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
      <div className="blur-img">
      </div>
      <div>
        <h1 className="home-header">Dashboard</h1>
      </div>
      <hr />
      <div className="home-box-container">
        <div className="home-box">
          <h3>Products</h3>
          <hr/>
          <hr/>
          <h4>Total No Of Products = 7</h4>
          <button className="blue-button">Manage Products</button>
        </div>
        <div className="home-box">
          <h3>Orders</h3>
          <hr/>
          <hr/>
          <h4>Orders To Delivered = 3</h4>
          <button className="blue-button">Manage Orders</button>
        </div>
        <div className="home-box">
          <h3>Admins</h3>
          <hr/>
          <hr/>
          <h4>Total No Of Admins = 2</h4>
          <button className="blue-button">Manage Admins</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
