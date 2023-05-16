import React from "react";

function home() {
  return (
    <div>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

const Content = () => {
  return (
    <div>
      <h1>Content</h1>
    </div>
  );
};
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

export default home;
