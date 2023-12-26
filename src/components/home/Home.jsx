import "./Home.css";

import Data from "./Data";
import React from "react";
import ScrollDown from "./ScrollDown";
import Social from "./Social";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <Social />
          <div className="home-img"></div>
          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
