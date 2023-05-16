import React from "react";
import "./styles/homelogo.css";
import { useNavigate } from "react-router-dom";

function Homelogo() {
  let navigate = useNavigate();
  let GoToStore = () => {
    navigate("/home");
  };
  return (
    <div className="homelogo-container">
      <div className="homelogo-intro">
        <h3>Buy Medical Products</h3>
        <hr />
        <p>Mian Medical Store</p>
        <div>
          <button className="store-button" onClick={() => GoToStore()}>
            Go To Store
          </button>
        </div>
      </div>
      <div className="homelogo-contact-container">
        <div className="homelogo-contact">
          <h4>Contact Us</h4>
          <form>
            <input placeholder="Enter Fullname" type="text" disabled></input>
            <input placeholder="Enter Email" type="email" disabled></input>
            <input
              placeholder="+92 Phone Number"
              type="number"
              disabled
            ></input>
            <button className="blue-button" disabled>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Homelogo;
