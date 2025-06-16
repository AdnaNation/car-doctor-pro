import React from "react";
import NavBar from "../shared/NavBar";
import Banner from "./Banner";
import About from "./About";
import Services from "./Services";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
    </div>
  );
};

export default HomePage;
