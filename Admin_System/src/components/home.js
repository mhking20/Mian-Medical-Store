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
          <h3>Available Products</h3>
        </div>
        <div className="home-box">
          <h3>Orders To Complete</h3>
        </div>
        <div className="home-box">
          <h3>Manage Admins</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
