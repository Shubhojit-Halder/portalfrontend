import React from "react";
import { LandingPageWrapper } from "../CSS/Landing.styled";
import bgImg from "../Static/landing.jpg";
import backPNG from "../Static/back.png";
import Typed from "react-typed";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const navigate = useNavigate();
  return (
    <LandingPageWrapper bgImg={bgImg} backPNG={backPNG}>
      <ul className="navlist">
        <li
          className="box_nav"
          onClick={() => {
            navigate("/events");
          }}
        >
          Events
        </li>
        <li className="club-name">
          {" "}
          <Typed
            strings={["Megatronix"]}
            typeSpeed={100}
            showCursor={false}
          />{" "}
        </li>
        <li className="box_nav">Registration</li>
        {/* <li>Events</li> */}
      </ul>
      {/* <div className="club-name"> */}
      {/* <Typed strings={["Megatronix"]} typeSpeed={50} backSpeed={50} loop/> */}
      {/* Megatronix
      </div> */}
      <div className="portal_2k22">
        <h1>Portal 2K22</h1>
        {/* <p>Tech Xtraa</p> */}
      </div>
    </LandingPageWrapper>
  );
};

export default Landing;
