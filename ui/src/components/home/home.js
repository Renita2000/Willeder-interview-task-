import React from "react";
import Union from "../../assets/Union.png";
import Union_large from "../../assets/Union_large.png";
import Hamburger from "../../assets/hamburgerIcon.png";
import "./home.scss";

function Home() {
  return (
    <div className="app">
      <div className="heroImg"></div>
      <div className="topBar">
        <div className="fullLogo">
          <img src={Union} className="Union" alt="" />
          <div className="logo">LOGO</div>
        </div>

        <div className="topNavList">
          <p className="home">Home</p>
          <p className="page1">Page 1</p>
          <p className="page2">Page 2</p>
        </div>
        <img
          src={Hamburger}
          alt="hamburger"
          className="hamburgericon"
          style={{
            Width: "20px",
            Height: "16px",
          }}
        />
      </div>

      <div className="centerUnion">
        <img src={Union_large} alt="" />
        <p className="enlargedLogo">LOGO</p>
      </div>
      <div className="colouredTextDiv">
        <p className="highlightedText">Lorem ipsum dolor sit amet</p>
        <p className="highlightedText2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="scrollBox">
          <p className="scroll">scroll</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="64"
            viewBox="0 0 2 64"
            fill="none"
          >
            <path d="M1 0V64" stroke="white" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Home;
